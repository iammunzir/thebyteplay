'use client';

import { useState } from 'react';
import ChatInterface from '../components/ChatInterface';
import Header from '../components/Header';

export default function Home() {
  const [messages, setMessages] = useState([{
    id: '1',
    content: 'Hello! I\'m DeepAgent, your AI-powered assistant. How can I help you today?',
    sender: 'ai',
    timestamp: new Date()
  }]);

  const handleSendMessage = (content: string) => {
    const userMessage = {
      id: Date.now().toString(),
      content,
      sender: 'user' as const,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        content: `Thank you for your message: "${content}". This is a simulated response from DeepAgent. In a full implementation, this would connect to a real AI service.`,
        sender: 'ai' as const,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 flex flex-col overflow-hidden">
        <ChatInterface 
          messages={messages} 
          onSendMessage={handleSendMessage} 
        />
      </main>
    </div>
  );
}
