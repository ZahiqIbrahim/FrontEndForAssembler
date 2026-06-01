# 8-Bit Microcontroller Assembler and Programmer

A web-based Integrated Development Environment (IDE) for writing, assembling, and uploading assembly programs to an 8-bit microcontroller via serial port communication.

## Features

- **Code Editor** with line numbers for writing assembly programs
- **Instruction Set Reference** - Quick access to all supported opcodes and mnemonics
- **Real-time Upload** - Upload programs directly to the microcontroller memory
- **Error Logging** - Clear feedback on upload success or failure
- **Dark Theme** - Easy on the eyes for extended coding sessions
- **Responsive Design** - Clean, modern interface

## Instruction Set

| Opcode | Mnemonic | Description |
|--------|----------|-------------|
| 0001 | LDA addr | Load value from memory address into A register |
| 0010 | ADD addr | Add value at memory address to A register |
| 0011 | SUB addr | Subtract value at memory address from A register |
| 0100 | STA addr | Store A register value into memory address |
| 0101 | LDI value | Load immediate 4-bit value directly into A register |
| 0110 | JMP addr | Jump to memory address unconditionally |
| 0111 | JPC addr | Jump if Carry flag is set |
| 1000 | JPZ addr | Jump if Zero flag is set |
| 1110 | OUT | Send A register value to output display |
| 1111 | HLT | Halt the computer. Stop execution |

## How to Use

1. **Write Your Program**: Enter assembly instructions in the code editor (left column shows line numbers)
2. **Reference Instructions**: Use the instruction set panel on the left for quick reference
3. **Upload**: Click the "Upload" button to send your program to the microcontroller
4. **View Results**: Check the log box at the bottom for success/error messages

## Example Program

```
LDI 15
OUT
SUB 5
OUT
HLT
```

This program loads the value 15, outputs it, subtracts 5, outputs the result (10), and halts.

## Setup

### Prerequisites

- **Backend Required**: This frontend requires the Spring Boot backend project **"8_Bit_Microcomputer_Assembler"** to function
- **Backend Repository**: https://github.com/ZahiqIbrahim/8_Bit_Microcomputer_Assembler
- The backend must be running and expose the `/new-program` POST endpoint
- CORS must be configured to allow requests from this frontend
- Serial port communication must be properly configured on the backend

### Installation

1. Clone this repository
2. Open `index.html` in a web browser
3. Configure the `baseUrl` in `script.js` to point to your backend server (default: `http://localhost:8080`)

### Backend API

**POST** `/new-program`

- **Content-Type**: `text/plain`
- **Body**: Assembly program as plain text (one instruction per line)
- **Response**: 
  - Success: `200 OK` with success message
  - Error: `400 Bad Request` with error details

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with dark theme
- **Vanilla JavaScript** - Functionality (no frameworks)
- **Fetch API** - HTTP requests to backend

## File Structure

```
FrontEndForAssembler/
├── index.html          # Main HTML structure
├── styles.css          # All styling and dark theme
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Configuration

Edit the `baseUrl` variable in `script.js` to match your backend server:

```javascript
const baseUrl = 'http://localhost:8080';
```

## Browser Compatibility

Works in all modern browsers that support:
- ES6 JavaScript
- Fetch API
- CSS Grid/Flexbox

