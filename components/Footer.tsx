// components/Footer.tsx
export function Footer() {
    return (
        <footer style={{ backgroundColor: '#1a202c', color: 'white', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/images/logopp.jpg" alt="Logo" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
                <p style={{ margin: '0' }}>Programming Pathshala</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p style={{ margin: '0 1rem 0 0' }}>Contact us</p>
                <p style={{ margin: '0' }}>Terms of Service</p>
            </div>
        </footer>
    );
}
