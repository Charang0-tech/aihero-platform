const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

async function testConnection() {
  console.log('🔍 Testing Supabase connection...')
  console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
  console.log('Anon Key starts with:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.substring(0, 20) + '...')
  
  try {
    // Test basic connection
    const { data, error } = await supabase
      .from('lessons')
      .select('*')
      .limit(5)
    
    if (error) throw error
    
    console.log('✅ Connection successful!')
    console.log(`📊 Found ${data.length} lessons in database`)
    
    if (data.length > 0) {
      console.log('Lessons found:')
      data.forEach(lesson => {
        console.log(`  - ${lesson.id}: ${lesson.title}`)
      })
    }
    
    // Test other tables
    console.log('\n🔍 Testing other tables...')
    
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select('count')
      .limit(1)
    
    if (!usersError) {
      console.log('✅ Users table accessible')
    }
    
    const { data: sessions, error: sessionsError } = await supabase
      .from('learning_sessions')
      .select('count')
      .limit(1)
    
    if (!sessionsError) {
      console.log('✅ Learning sessions table accessible')
    }
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message)
    console.error('Full error:', error)
    
    if (error.message.includes('JWT')) {
      console.log('\n💡 This looks like a JWT/authentication error.')
      console.log('Please check:')
      console.log('1. Your Supabase URL is correct')
      console.log('2. Your Anon key matches the project')
      console.log('3. Your database has the tables created')
    }
  }
}

testConnection()
