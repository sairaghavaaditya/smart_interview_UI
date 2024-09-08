document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const role = document.getElementById('role').value;

    if (role === 'admin') {
        window.location.href = '/admin/admin-dashboard.html';
    } else if (role === 'interviewer') {
        window.location.href = '/candidate/interviewer-dashboard.html';
    } else if (role === 'candidate') {
        window.location.href = '/candidate/candidate-dashboard.html';
    }
});


