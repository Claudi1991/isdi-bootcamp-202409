import registerUser from './registerUser.js'

try {
    registerUser('Zaraki', 'zaraki@kenpashi.com', 'zaraki', 'bankai123', 'bankai123')
} catch (error) {
    console.error(error)
}