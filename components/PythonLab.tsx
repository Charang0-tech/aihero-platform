'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Terminal, Play, Square, RotateCcw, Download } from 'lucide-react'

interface PythonLabProps {
  initialCode?: string
  lessonId?: string
}

export default function PythonLab({ 
  initialCode = `# Welcome to Python Lab! 🐍
print("Hello from AIHero!")

# Try some Python code here
name = "Student"
print(f"Hello, {name}!")

# Your code goes below:
`,
  lessonId 
}: PythonLabProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [pyodideReady, setPyodideReady] = useState(false)
  const pyodideRef = useRef<any>(null)

  // Initialize Pyodide
  useEffect(() => {
    const initPyodide = async () => {
      try {
        setOutput('🔄 Loading Python environment...\n')
        
        // Load Pyodide script
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js'
        script.onload = async () => {
          pyodideRef.current = await window.loadPyodide({
            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/'
          })
          
          // Set up output capture
          pyodideRef.current.runPython(`
import sys
from io import StringIO

class OutputCapture:
    def __init__(self):
        self.output = []
    
    def write(self, text):
        if text.strip():
            self.output.append(str(text))
    
    def flush(self):
        pass
    
    def get_output(self):
        return ''.join(self.output)
    
    def clear(self):
        self.output = []

output_capture = OutputCapture()
          `)
          
          setPyodideReady(true)
          setOutput('✅ Python environment ready! Click "Run Code" to execute.\n')
        }
        document.head.appendChild(script)
      } catch (error) {
        setOutput(`❌ Failed to load Python: ${error}`)
      }
    }

    initPyodide()
  }, [])

  const runPythonCode = async () => {
    if (!pyodideReady || !pyodideRef.current) return

    setIsRunning(true)
    setOutput('🔄 Running...\n')

    try {
      pyodideRef.current.runPython('output_capture.clear()')
      pyodideRef.current.runPython(`
sys.stdout = output_capture
sys.stderr = output_capture
      `)
      
      pyodideRef.current.runPython(code)
      
      const result = pyodideRef.current.runPython('output_capture.get_output()')
      
      pyodideRef.current.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
      `)
      
      setOutput(result || '✅ Code executed successfully!')
    } catch (error: any) {
      setOutput(`❌ Error: ${error.message}`)
    } finally {
      setIsRunning(false)
    }
  }

  return (
    <div className="w-full">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <Terminal className="w-6 h-6 text-emerald-400" />
          Real Python Environment
        </h2>
        <p className="text-gray-400">Execute real Python code in your browser!</p>
      </div>
      
      <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
        <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-white font-medium ml-2">main.py</span>
              {pyodideReady && <span className="text-green-400 text-sm ml-4">Python Ready ✓</span>}
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setCode(initialCode)}
                disabled={isRunning}
                className="flex items-center gap-1 bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
              
              <button
                onClick={() => setOutput('')}
                className="flex items-center gap-1 bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded text-sm"
              >
                <Square className="w-4 h-4" />
                Clear
              </button>
              
              <button
                onClick={runPythonCode}
                disabled={!pyodideReady || isRunning}
                className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-700 text-white px-4 py-1 rounded text-sm"
              >
                <Play className="w-4 h-4" />
                {isRunning ? 'Running...' : 'Run Code'}
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="border-r border-gray-700">
            <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
              <span className="text-gray-300 text-sm font-medium">Python Code</span>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-96 bg-gray-900 text-green-400 p-4 font-mono text-sm resize-none focus:outline-none"
              placeholder="Write your Python code here..."
            />
          </div>
          
          <div className="bg-gray-950">
            <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
              <span className="text-gray-300 text-sm font-medium">Output</span>
            </div>
            <pre className="p-4 text-blue-300 text-sm h-96 overflow-auto whitespace-pre-wrap font-mono">
              {output || 'Click "Run Code" to see output...'}
            </pre>
          </div>
        </div>
      </div>

      <div className="mt-4 bg-blue-900/30 border border-blue-500/50 rounded-lg p-4">
        <h3 className="text-blue-300 font-semibold mb-2">🐍 Features</h3>
        <ul className="text-blue-100 text-sm space-y-1">
          <li>• Real Python 3.11 execution</li>
          <li>• Variables, functions, loops, conditionals</li>
          <li>• Built-in libraries (math, random, etc.)</li>
          <li>• Real error messages and debugging</li>
        </ul>
      </div>
    </div>
  )
}

// Add TypeScript declarations
declare global {
  interface Window {
    loadPyodide: (config?: any) => Promise<any>;
  }
}
