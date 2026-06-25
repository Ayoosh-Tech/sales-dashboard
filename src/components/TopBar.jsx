import React from 'react';

const TopBar = () => { 
    return ( 
    <header className="flex items-center justify-between border-b border-slate-400
    bg-white px-6 py-6">
     <div>
        <h1 className="text-lg font-semibold text-slate-900">Good Evening, Aisha.</h1>
        <p className="text-sm text-slate-400">Here is your dashboard</p>
     </div>
     <div className="h-9 w-9 bg-slate-200 rounded-full overflow-hidden">
        <img src="/images/myimage.png" alt="Profile"  className="h-full w-full object-cover" />
        </div>
    </header>
    );
};

export default TopBar;