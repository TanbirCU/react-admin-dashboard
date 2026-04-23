import { Search, Bell, User, MessageSquare } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="h-16 glass border-b border-white/5 flex items-center justify-between px-6">
            <div className="flex items-center gap-4 flex-1">
                <div className="relative w-full max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                    <input 
                        type="text" 
                        placeholder="Search for something..."
                        className="w-full bg-surface/50 border border-white/5 rounded-xl py-2 pl-10 pr-4 text-sm text-text-main focus:outline-none focus:border-primary/50 transition-all focus:bg-surface"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 text-text-muted hover:text-text-main hover:bg-surface-hover rounded-xl transition-all relative">
                    <MessageSquare size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-background"></span>
                </button>
                <button className="p-2 text-text-muted hover:text-text-main hover:bg-surface-hover rounded-xl transition-all relative">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background"></span>
                </button>
                <div className="h-8 w-px bg-white/10 mx-2"></div>
                <div className="flex items-center gap-3 pl-2">
                    <div className="text-right">
                        <div className="text-sm font-semibold text-text-main">Tanvir Ahmed</div>
                        <div className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Super Admin</div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary p-[2px]">
                        <div className="w-full h-full rounded-xl bg-surface flex items-center justify-center overflow-hidden">
                            <User className="text-primary" size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;