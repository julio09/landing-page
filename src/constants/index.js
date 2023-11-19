

export const NavLink = [
    {
        id : 'Home',
        Title: 'Home'
    },
    {
        id : 'About',
        Title: 'About'
    },
    {
        id : 'Products',
        Title: 'Products'
    },
    {
        id : 'Contact',
        Title: 'Contact'
    }
];


export const listItems = NavLink.map(nav =>
      <li key={nav.id}>{nav.Title}</li>
    );