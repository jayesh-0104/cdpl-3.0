
const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src/data/mockTestData.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Find all array definitions
const arrayRegex = /const (\w+)Questions: Question\[\] = \[\s*([\s\S]*?)\];/g;
let match;
let totalQuestions = 0;
const results = [];

while ((match = arrayRegex.exec(content)) !== null) {
    const arrayName = match[1] + 'Questions';
    const arrayContent = match[2];
    // Count objects in the array content
    const questionCount = (arrayContent.match(/{ id: /g) || []).length;
    totalQuestions += questionCount;
    results.push({ name: arrayName, count: questionCount });
}

const output = [];
output.push("Category Counts:");
results.forEach(r => {
    output.push(`${r.name}: ${r.count}`);
    if (r.count < 10) {
        output.push(`WARNING: ${r.name} has fewer than 10 questions!`);
    }
});
output.push(`\nTotal Questions: ${totalQuestions}`);
fs.writeFileSync('verification_results.txt', output.join('\n'));
console.log("Verification complete. Results written to verification_results.txt");
