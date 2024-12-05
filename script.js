        // List of valid keys
        const validKeys = [
            "math_key_k2oo9i123jn12jfsdf",
            "math_key_DEF456UVW"
            // Add more valid keys as needed
        ];

        document.getElementById('redeem-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const enteredKey = document.getElementById('product-key').value;

            // Check if the entered key is valid
            if (validKeys.includes(enteredKey)) {
                const installSection = document.getElementById('install-section');
                installSection.innerHTML = `
                    <h2>Install Your Tool</h2>
                    <a href="https://download1532.mediafire.com/91bzbciy5kmgzK_P8EXAIU0TSxGZVaJIN42M3VCs1FPjpkryg6N9TI7CY0BDdeT2SCtTSiGKzGXSJgQjt3tT9JAEJWPAQ8c-zPZtBkGaSBbhZe1IuD95OFdsBJhfPY5LtR-uhYWPBJMSWkC0_CgFrGmdPAvjTE1rEJBll8bs2nCA5w/swmxuf4i1a1azvh/Please+Extract+the+File+and+run+Index.html+.zip" target="_blank">Download Latest Release</a>
                `;
                installSection.style.display = 'block';
                alert("Key is valid! You can now download the tool.");
            } else {
                alert("Invalid product key. Please try again.");
            }
        });