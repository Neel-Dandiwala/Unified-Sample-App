<template>
    <main>
        <div class="container" id="container">
            <div class="data-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Emails</th>
                            <th>Title</th>
                            <th>Manager ID</th>
                            <th>Employment Status</th>
                            <th>Location</th>
                            <th>Telephones</th>
                            <th>Employee Number</th>
                            <th>Hired At</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="employee in employees" :key="employee.id">
                            <td>{{ employee.id }}</td>
                            <td>{{ employee.name }}</td>
                            <td>
                                <ul>
                                    <li v-for="email in employee.emails" :key="email">{{ email.email }} ({{ email.type
                                        }})</li>
                                </ul>
                            </td>
                            <td>{{ employee.title }}</td>
                            <td>{{ employee.manager_id }}</td>
                            <td>{{ employee.employment_status }}</td>
                            <td>{{ employee.location }}</td>
                            <td>
                                <ul>
                                    <li v-for="phone in employee.telephones" :key="phone">{{ phone.telephone }} ({{
                                        phone.type }})</li>
                                </ul>
                            </td>
                            <td>{{ employee.employee_number }}</td>
                            <td>{{ employee.hired_at }}</td>
                        </tr>
                    </tbody>
                </table>
                <a href="/"><button>Go Back</button></a>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'DataView',
    data() {
        return {
            employees: []
        };
    },
    mounted() {
        this.fetchEmployees();
    },
    methods: {
        fetchEmployees() {
            const url = 'http://localhost:3000/15five';
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.employees = data;
                })
                .catch(error => {
                    console.error('Error fetching employees:', error);
                });
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

* {
    box-sizing: border-box;
}

main {
    display: flex;
    place-items: center;
    place-content: center;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
}

h1 {
    font-weight: bold;

    line-height: 1.5;
    margin-bottom: 1rem;
}

p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 0 0 30px;
}

button {
    border-radius: 20px;
    border: 1px solid #555555;
    background-color: #555555;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    margin-top: 20px;
}

button:active {
    transform: scale(0.95);
}

button:focus {
    outline: none;
}

button.ghost {
    background-color: transparent;
    border-color: #FFFFFF;
}

.container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: auto;
    max-width: 90%;
    height: 75%;
    min-height: 480px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.data-container {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
}


em {
    font-style: italic;
}

table {
    border-collapse: collapse;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    width: 80%;
}

th {
    color: #191c36;
    font-weight: bold;
    padding: 10px 15px;
    position: relative;
}


td {
    padding: 10px 15px;
    position: relative;
    transition: all 300ms;
    border-right: 1px solid #f8f8f8;
}

td:last-child {
    border-right: 0px;
}


tbody:hover td {
    color: transparent;
    text-shadow: 0 0 3px #aaa;
}

tbody:hover tr:hover td {
    color: #2a2a56;
    text-shadow: 0 1px 0 #fff;
}
</style>