export let list2 = [
    {id: 1, name: "Priyanshu Acharya", email: "PriyanshuAcharya2030@gmail.com"},
    {id: 2, name: "John Doe", email: "JohnDoe@gmail.com"},
    {id: 3, name: "Jane Smith", email: "JaneSmith@gmail.com"},
    {id: 4, name: "Hello", email: "Hello@gmail.com"},
];

// Load users from localStorage on startup (for persistence across sessions)
const loadUsersFromStorage = () => {
    try {
        const savedUsers = localStorage.getItem('userData');
        if (savedUsers) {
            const parsed = JSON.parse(savedUsers);
            if (Array.isArray(parsed) && parsed.length > 0) {
                list2 = parsed;
                return parsed;
            }
        }
    } catch (error) {
        console.warn('Failed to load users from localStorage:', error);
    }
    return list2;
};

// Save users to localStorage (for persistence)
const saveUsersToStorage = () => {
    try {
        localStorage.setItem('userData', JSON.stringify(list2));
    } catch (error) {
        console.warn('Failed to save users to localStorage:', error);
    }
};

// Initialize users from storage
list2 = loadUsersFromStorage();

// Function to add new user
export const addUser = (newUser) => {
    const user = {
        id: list2.length + 1,
        name: newUser.name,
        email: newUser.email,
        createdAt: new Date().toISOString()
    };
    list2.push(user);
    
    // Save to localStorage for persistence
    saveUsersToStorage();
    
    // Log for debugging
    console.log('New user added:', user);
    console.log('Updated user list:', list2);
    
    return user;
};

// Function to check if email exists
export const emailExists = (email) => {
    return list2.some(user => user.email.toLowerCase() === email.toLowerCase());
};

// Function to get all users
export const getAllUsers = () => {
    return [...list2]; // Return a copy to prevent direct mutation
};

// Function to reset users (useful for testing)
export const resetUsers = () => {
    list2 = [
        {id: 1, name: "Priyanshu Acharya", email: "PriyanshuAcharya2030@gmail.com"},
        {id: 2, name: "John Doe", email: "JohnDoe@gmail.com"},
        {id: 3, name: "Jane Smith", email: "JaneSmith@gmail.com"},
        {id: 4, name: "Hello", email: "Hello@gmail.com"},
    ];
    saveUsersToStorage();
    return list2;
};

// Function to export users as JSON (for downloading)
export const exportUsers = () => {
    return JSON.stringify(list2, null, 2);
};

// Function to import users from JSON
export const importUsers = (jsonData) => {
    try {
        const imported = JSON.parse(jsonData);
        if (Array.isArray(imported)) {
            list2 = imported;
            saveUsersToStorage();
            return true;
        }
    } catch (error) {
        console.error('Failed to import users:', error);
    }
    return false;
};