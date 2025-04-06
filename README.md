# DevSync: AI-Powered Real-Time Coding Collaboration Platform

DevSync is an all-in-one, real-time collaborative coding platform designed to supercharge developer teamwork. Whether you're debugging together, doing a peer review, or building a hackathon project, DevSync offers a seamless and intelligent coding experience — all in one place.

## Key Features

- 🖊 **Real-Time Code Editing & Chat**
  - Built using Node.js and Socket.io
  - Multiple users can edit code simultaneously
  - Integrated chat for smooth communication

- 💬 **Interactive Coding Workspace**
  - Sleek React-based UI
  - Intuitive, responsive editor
  - Syntax highlighting and file management
  - Dark mode support

- 🤖 **AI-Powered Code Assistance**
  - Integrated with OpenAI Codex
  - Intelligent code suggestions
  - Auto-completions and debugging tips

- 🔗 **Pair Programming Matchmaking**
  - ML-based developer matching
  - Skill and interest-based pairing
  - Perfect for learning and mentoring

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Real-Time Engine**: Socket.io
- **AI Integration**: OpenAI Codex
- **Matchmaking**: Python + scikit-learn

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Python 3.8+ (for matchmaking service)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   - Create `.env` files in both frontend and backend directories
   - Add necessary API keys and configuration

4. Start the development servers:
   ```bash
   # Start backend
   cd backend
   npm run dev

   # Start frontend
   cd frontend
   npm start
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 