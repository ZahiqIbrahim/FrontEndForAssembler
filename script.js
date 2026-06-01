const baseUrl = 'http://localhost:8080';

// Line numbering functionality
const programText = document.getElementById('programText');
const lineNumbers = document.getElementById('lineNumbers');

function updateLineNumbers() {
    const lines = programText.value.split('\n');
    lineNumbers.innerHTML = lines.map((_, index) => index).join('<br>');
}

function syncScroll() {
    lineNumbers.scrollTop = programText.scrollTop;
}

programText.addEventListener('input', updateLineNumbers);
programText.addEventListener('scroll', syncScroll);

// Initialize line numbers
updateLineNumbers();

document.getElementById('uploadBtn').addEventListener('click', async () => {
    const errorOutput = document.getElementById('errorOutput');
    
    errorOutput.classList.remove('success', 'error');
    
    if (!programText.value.trim()) {
        errorOutput.value = 'Error: Please enter a program.';
        errorOutput.classList.add('error');
        return;
    }

    errorOutput.value = 'Uploading...';

    try {
        const response = await fetch(`${baseUrl}/new-program`, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: programText.value
        });

        if (response.ok) {
            const result = await response.text();
            errorOutput.value = result;
            errorOutput.classList.add('success');
        } else {
            const error = await response.json();
            errorOutput.value = 'Error: ' + JSON.stringify(error);
            errorOutput.classList.add('error');
        }
    } catch (error) {
        errorOutput.value = 'Error: ' + error.message;
        errorOutput.classList.add('error');
    }
});
