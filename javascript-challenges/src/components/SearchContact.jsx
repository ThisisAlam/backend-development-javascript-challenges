import React from 'react';

export default function SearchContact() {
    const [contacts, setContacts] = React.useState([
        { name: 'John Smith', email: 'john.smith@gmail.com', phone: '415-792-6341' },
        { name: 'Kofi Mensah', email: 'kofi.mensah@yahoo.com', phone: '+233-24-597-1823' },
        { name: 'Jane West', email: 'jane.west@hotmail.com', phone: '310-453-8765' },
        { name: 'Alice Johnson', email: 'alice.johnson@outlook.com', phone: '202-555-8472' },
        { name: 'Amina Hassan', email: 'amina.hassan@gmail.com', phone: '+254-712-439582' },
        { name: 'Jane Smith', email: 'jane.smith@yahoo.com', phone: '212-555-2394' },
        { name: 'Chun Hei Park', email: 'chunhei.park@naver.com', phone: '+82-10-8243-6510' },
        { name: 'Rina Nakamura', email: 'rina.nakamura@jp.com', phone: '+81-90-2746-3951' },
    ]);
    //Input state for search query
    const [searchQuery, setSearchQuery] = React.useState("");
    
    //State to hold filtered contacts based on search query
    const [filteredContacts, setFilteredContacts] = React.useState([]);
    
    React.useEffect(() => {
        if (!searchQuery.trim()) {
            setFilteredContacts([]);
            return;
        }
         const filtered = contacts.filter(contact => 
            contact.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredContacts(filtered);
    }, [searchQuery]);

    function searchContacts(searchQuery) {
        const filtered = contacts.filter(contact => 
            contact.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredContacts(filtered);
    }   

    return(
        <>
            <div className="search-contact-app">
                <div className="search-bar">
                    <div className="search-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search contacts..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button
                                className="clear-btn"
                                onClick={() => setSearchQuery("")}
                            >×</button>
                        )}
                    </div>
                    <button className="search-btn" onClick={() => 
                        searchContacts(searchQuery)}
                    >Search</button>
                </div>
                <div className="search-results">
                    {
                        filteredContacts.length > 0 
                        ? (filteredContacts.map((contact, index) => (
                            <div key={index} className="contact-card">
                                <h3>{contact.name}</h3>
                                <p>Email: {contact.email}</p>
                                <p>Phone: {contact.phone}</p>
                            </div>
                            ))
                        ) : (
                            <p className="no-results">No contacts found.</p>
                        )
                    }
                </div>
            </div>
        </>
    )

}