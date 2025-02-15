// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const user = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                contact: document.getElementById('contact').value,
                address: document.getElementById('address').value
            };
            
            // Get existing users or initialize empty array
            let users = JSON.parse(localStorage.getItem('users') || '[]');
            
            // Add new user
            users.push(user);
            
            // Save to localStorage
            localStorage.setItem('users', JSON.stringify(users));
            
            // Reset form
            registrationForm.reset();
            
            // Show success message
            alert('User registered successfully!');
            
            // Redirect to view page
            window.location.href = 'view.html';
        });
    }
    
    // Display users in table
    const userTable = document.getElementById('userTable');
    if (userTable) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        if (users.length > 0) {
            const table = document.createElement('table');
            table.className = 'table table-striped';
            
            // Create table header
            const thead = document.createElement('thead');
            thead.innerHTML = `
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Address</th>
                </tr>
            `;
            table.appendChild(thead);
            
            // Create table body
            const tbody = document.createElement('tbody');
            users.forEach(user => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.contact}</td>
                    <td>${user.address}</td>
                `;
                tbody.appendChild(tr);
            });
            table.appendChild(tbody);
            
            // Replace no-users message with table
            userTable.innerHTML = '';
            userTable.appendChild(table);
        }
    }
});