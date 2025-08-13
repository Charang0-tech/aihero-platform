// debug-test-db.js - More robust testing with error catching
import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

// Load environment variables
config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing environment variables!')
  process.exit(1)
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testIndividualTable(tableName) {
  try {
    console.log(`\n🔍 Testing ${tableName} table...`)
    
    const { data, error } = await supabase
      .from(tableName)
      .select('count')
      .limit(1)

    if (error) {
      console.log(`❌ ${tableName} table error:`, error.message)
      console.log(`Error code: ${error.code}`)
      return false
    } else {
      console.log(`✅ ${tableName} table accessible`)
      return true
    }
  } catch (err) {
    console.log(`❌ ${tableName} table exception:`, err.message)
    return false
  }
}

async function testConnection() {
  try {
    console.log('🔍 Testing Supabase connection...')
    console.log(`URL: ${supabaseUrl}`)
    console.log(`Anon Key starts with: ${supabaseAnonKey.substring(0, 20)}...`)

    // Test basic connection with lessons table
    const { data: lessons, error: lessonsError } = await supabase
      .from('lessons')
      .select('id, title')
      .limit(5)

    if (lessonsError) {
      throw lessonsError
    }

    console.log('✅ Connection successful!')
    console.log(`📊 Found ${lessons.length} lessons in database`)
    
    if (lessons.length > 0) {
      console.log('Lessons found:')
      lessons.forEach(lesson => {
        console.log(`  - ${lesson.id}: ${lesson.title}`)
      })
    }

    console.log('\n🔍 Testing all tables systematically...')

    // Test each table individually with error handling
    const tables = [
      'users',
      'user_progress', 
      'learning_sessions',
      'code_submissions',
      'user_profiles',
      'training_sessions',
      'spaced_repetition_items'
    ]

    const results = {}
    
    for (const table of tables) {
      results[table] = await testIndividualTable(table)
      // Add a small delay to avoid overwhelming the API
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    console.log('\n📊 TABLE TEST SUMMARY:')
    console.log('='.repeat(40))
    
    for (const [table, success] of Object.entries(results)) {
      const status = success ? '✅' : '❌'
      console.log(`${status} ${table}`)
    }

    console.log('\n🎉 Database connectivity test completed!')

  } catch (error) {
    console.error('❌ Connection failed:', error.message)
    console.error('Full error:', error)
  }
}

// Test auth functionality
async function testAuth() {
  console.log('\n🔐 Testing authentication system...')
  
  try {
    // Test getting current session (should be null for new connection)
    const { data: { session }, error } = await supabase.auth.getSession()
    
    if (error) {
      console.log('⚠️ Auth error:', error.message)
    } else {
      console.log('✅ Auth system accessible')
      console.log(`Current session: ${session ? 'Logged in' : 'No active session'}`)
    }
  } catch (error) {
    console.log('❌ Auth test failed:', error.message)
  }
}

// Check what tables actually exist
async function listActualTables() {
  console.log('\n🗂️ Checking what tables actually exist in your database...')
  
  try {
    // This is a PostgreSQL-specific query to list tables
    const { data, error } = await supabase
      .rpc('exec_sql', { 
        query: `
          SELECT table_name 
          FROM information_schema.tables 
          WHERE table_schema = 'public' 
          ORDER BY table_name;
        ` 
      })

    if (error) {
      console.log('⚠️ Could not list tables directly. Trying alternative method...')
      
      // Try a simpler approach - test common table names
      const commonTables = ['lessons', 'users', 'user_progress', 'learning_sessions']
      for (const table of commonTables) {
        await testIndividualTable(table)
      }
    } else {
      console.log('Available tables:')
      data.forEach(row => console.log(`  - ${row.table_name}`))
    }
  } catch (error) {
    console.log('⚠️ Table listing not available, continuing with standard tests...')
  }
}

// Main execution
async function runAllTests() {
  await testConnection()
  await testAuth()
  await listActualTables()
  
  console.log('\n' + '='.repeat(50))
  console.log('🎯 COMPLETE DIAGNOSTIC FINISHED!')
  console.log('='.repeat(50))
}

runAllTests()
