const fs = require('fs');
const path = require('path');

const topics = [
  "AI-Powered Debugging Techniques",
  "Natural Language to JavaScript with AI",
  "AI-Generated JavaScript Documentation",
  "Smart Error Handling with AI",
  "AI-Assisted Code Refactoring",
  "Automated Dependency Management",
  "AI for JavaScript Performance Optimization",
  "Predictive Coding with AI",
  "AI-Powered JavaScript Security Scanning",
  "Intelligent Code Search with AI",
  "AI-Generated JavaScript Examples",
  "Automated JavaScript Library Recommendations",
  "AI-Powered Code Migration",
  "Context-Aware JavaScript Suggestions",
  "AI for Legacy JavaScript Modernization",
  "Automated JavaScript Polyfill Generation",
  "AI-Powered JavaScript Minification",
  "Smart Code Splitting with AI",
  "AI for JavaScript Bundle Optimization",
  "Automated Accessibility Compliance",
  "AI-Powered Internationalization",
  "Smart State Management with AI",
  "AI for JavaScript Testing Strategies",
  "Automated CI/CD Pipeline Configuration",
  "AI-Powered Code Visualization",
  "JavaScript Pattern Recognition with AI",
  "AI-Generated JavaScript Snippets",
  "Automated API Client Generation",
  "AI-Powered JavaScript Learning Resources",
  "Smart Code Commenting with AI",
  "AI for JavaScript Code Style Enforcement",
  "Automated JavaScript Library Updates",
  "AI-Powered Code Complexity Analysis",
  "JavaScript Tech Debt Identification",
  "AI for JavaScript Memory Optimization",
  "Automated JavaScript Framework Selection",
  "AI-Powered JavaScript Interview Questions",
  "Smart Algorithm Implementation",
  "AI for JavaScript Data Structures",
  "Automated JavaScript Security Patches",
  "AI-Powered JavaScript Code Obfuscation",
  "JavaScript to WebAssembly with AI",
  "AI for JavaScript Animation Optimization",
  "Automated JavaScript Chart Generation",
  "AI-Powered JavaScript Game Development",
  "Smart Form Validation with AI",
  "AI for JavaScript Real-time Applications",
  "Automated JavaScript SEO Optimization"
];

const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{TITLE} | AI-Powered JavaScript Development</title>
    <meta name="description" content="{DESCRIPTION}">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
        header { margin-bottom: 30px; }
        h1 { color: #2c3e50; }
        .content { margin-bottom: 40px; }
        .code-block { background: #f5f5f5; padding: 15px; border-radius: 5px; overflow-x: auto; }
        .nav { display: flex; justify-content: space-between; margin-top: 30px; }
        .nav a { text-decoration: none; color: #3498db; }
    </style>
</head>
<body>
    <header>
        <h1>{TITLE}</h1>
        <p>{DESCRIPTION}</p>
    </header>

    <div class="content">
        <p>This comprehensive guide explores how artificial intelligence is revolutionizing {TOPIC_AREA}. You'll learn practical techniques to:</p>
        <ul>
            <li>Implement AI-powered solutions in your JavaScript workflow</li>
            <li>Automate repetitive development tasks</li>
            <li>Enhance code quality and maintainability</li>
            <li>Boost productivity with intelligent tooling</li>
            <li>Stay ahead of JavaScript development trends</li>
        </ul>
        
        <h2>Key Benefits</h2>
        <ul>
            <li>30-50% reduction in development time</li>
            <li>40% fewer bugs in production code</li>
            <li>Improved code consistency across teams</li>
            <li>Faster onboarding for new developers</li>
        </ul>
        
        <h2>Getting Started</h2>
        <div class="code-block">
            <pre><code>// Basic implementation example
const ai{KEY} = require('ai-{KEY}-js');

const config = {
  apiKey: 'YOUR_AI_API_KEY',
  optimizationLevel: 'high',
  framework: 'react' // Optional framework context
};

const results = ai{KEY}.analyze(codeSnippet, config);
console.log('AI recommendations:', results);</code></pre>
        </div>
    </div>

    <div class="nav">
        <a href="index.html">← Back to Home</a>
        <a href="#">Next Article →</a>
    </div>
</body>
</html>`;

// Create directory if it doesn't exist
const outputDir = path.join(__dirname, 'generated-pages');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Generate pages
topics.forEach((topic, index) => {
  const key = topic.replace(/[^a-zA-Z]/g, '').substring(0,15);
  const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const content = template
    .replace(/{TITLE}/g, topic)
    .replace(/{DESCRIPTION}/g, `Learn how AI enhances ${topic.toLowerCase()} in modern JavaScript development`)
    .replace(/{TOPIC_AREA}/g, topic.toLowerCase())
    .replace(/{KEY}/g, key);
    
  fs.writeFileSync(path.join(outputDir, `${slug}.html`), content);
});

console.log(`Successfully generated ${topics.length} pages in ${outputDir}`);