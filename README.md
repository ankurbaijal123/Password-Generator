# 🔐 React Password Generator

A modern, secure password generator built with React and Tailwind CSS that helps create strong, customizable passwords instantly.

![Password Generator Demo](https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=2000&h=600)

## ✨ Features

- 🎯 Generate passwords between 6-100 characters
- 🔢 Optional numbers inclusion
- #️⃣ Optional special characters
- 📋 One-click copy to clipboard
- 🎨 Modern, responsive UI
- 🔄 Real-time password generation

## 🚀 Live Demo

[View Live Demo](#) <!-- Add your deployment URL here -->

## 🛠️ Technologies Used

- React 18
- Tailwind CSS

## 💻 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/ankurbaijal123/password-generator.git
\`\`\`

2. Install dependencies:
\`\`\`bash
cd password-generator
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

## 🎯 Usage

1. Adjust the password length using the slider (6-100 characters)
2. Toggle numbers and special characters using checkboxes
3. Click the "Copy" button to copy the generated password
4. Password updates automatically when settings change

## 🔧 Component Structure

\`\`\`
interface PasswordState {
  length: number;
  numberAllowed: boolean;
  charactersAllowed: boolean;
  password: string;
}
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React Team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
