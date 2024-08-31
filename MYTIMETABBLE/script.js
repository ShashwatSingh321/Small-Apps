document.getElementById('searchBtn').addEventListener('click', function() {
    const day = document.getElementById('dayInput').value.trim().toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (day === '') {
        resultsDiv.innerHTML = '<p>Please enter a day name.</p>';
        return;
    }

    const filteredCourses = courseData.courses.filter(course => course.day.toLowerCase() === day);

    if (filteredCourses.length > 0) {
        filteredCourses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.className = 'course';
            courseElement.innerHTML = `
                <h2>${course.course_title}</h2>
                <p><strong>Time:</strong> ${course.time}</p>
                <p><strong>Resource Name:</strong> ${course.resource_name}</p>
            `;
            resultsDiv.appendChild(courseElement);
        });
    } else {
        resultsDiv.innerHTML = '<p>No courses found for this day.</p>';
    }
});
