document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const consultant = document.getElementById('consultant').value;
    const fee = document.getElementById('fee').value;
    const paid = document.getElementById('paid').checked ? 'Yes' : 'No';
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const guardian = document.getElementById('guardian').value;
    const city = document.getElementById('city').value;
    const opd = document.getElementById('opd').checked ? 'Yes' : 'No';
    const pm = document.getElementById('pm').checked ? 'Yes' : 'No';
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const appointment = {
        name,
        email,
        phone,
        consultant,
        fee,
        paid,
        gender,
        age,
        guardian,
        city,
        opd,
        pm,
        date,
        time
    };

    addAppointment(appointment);
    clearForm();
});

const appointments = [];

function addAppointment(appointment) {
    appointments.push(appointment);
    const appointmentList = document.getElementById('appointmentList');
    const listItem = document.createElement('li');
    listItem.textContent = `Name: ${appointment.name}, Email: ${appointment.email}, Phone: ${appointment.phone}, Consultant: ${appointment.consultant}, Fee: ${appointment.fee}, Paid: ${appointment.paid}, Gender: ${appointment.gender}, Age: ${appointment.age}, Guardian: ${appointment.guardian}, City: ${appointment.city}, OPD Patient: ${appointment.opd}, PM Patient: ${appointment.pm}, Date: ${appointment.date}, Time: ${appointment.time}`;
    appointmentList.appendChild(listItem);
}

function clearForm() {
    document.getElementById('appointmentForm').reset();
}

document.getElementById('downloadBtn').addEventListener('click', function() {
    const ws = XLSX.utils.json_to_sheet(appointments);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Appointments");
    XLSX.writeFile(wb, "appointments.xlsx");
});
