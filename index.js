// Please read the README.md to understand what to do. Happy Coding !
async function fetchUserData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersData = await res.json();
        // console.log(usersData);
        const modifiedUsers = usersData.map(user => ({
            name: user.name,
            username: user.username,
            email: user.email,
            address: user.address.street,
            phone: user.phone,
            website: user.website,
            company: user.company.name
        }));
        console.log('Modified User List:', modifiedUsers);

        const filteredUsers = modifiedUsers.filter(user => user.email.endsWith('.biz'));
        console.log('filtered Users List:', filteredUsers);

        modifiedUsers.sort((a, b) => a.name.localeCompare(b.name));
        console.log('Sorted User List (Alphabetically by Name):', modifiedUsers);


    } catch (err) {
        console.log(err);
    } finally {
        console.log('the opreation is done ');
    }
}
fetchUserData()

