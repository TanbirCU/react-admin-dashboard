import { Link, useLocation } from 'react-router-dom';
import { 
    LayoutDashboard, 
    Users, 
    BookOpen, 
    Settings, 
    LogOut, 
    ChevronRight,
    BarChart3,
    Shield
} from 'lucide-react';
import { motion } from 'framer-motion';

const SidebarItem = ({ icon: Icon, label, path, active }) => (
    <Link to={path}>
        <motion.div 
            whileHover={{ x: 5 }}
            className={`flex items-center justify-between p-3 rounded-lg mb-1 transition-all ${
                active 
                ? 'bg-primary/20 text-primary border-l-4 border-primary' 
                : 'text-text-muted hover:bg-surface-hover hover:text-text-main'
            }`}
        >
            <div className="flex items-center gap-3">
                <Icon size={20} />
                <span className="font-medium">{label}</span>
            </div>
            {active && <ChevronRight size={16} />}
        </motion.div>
    </Link>
);

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="w-64 h-screen glass border-r border-white/5 flex flex-col p-4">
            <div className="flex items-center gap-3 px-2 mb-10">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                    <Shield className="text-white" size={24} />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-text-main leading-none">Nexus</h2>
                    <span className="text-[10px] text-text-muted uppercase tracking-widest font-bold">Admin Portal</span>
                </div>
            </div>

            <nav className="flex-1">
                <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest mb-4 px-2">Main Menu</div>
                <SidebarItem 
                    icon={LayoutDashboard} 
                    label="Dashboard" 
                    path="/" 
                    active={location.pathname === '/'} 
                />
                <SidebarItem 
                    icon={Users} 
                    label="Users" 
                    path="/users" 
                    active={location.pathname === '/users'} 
                />
                <SidebarItem 
                    icon={BookOpen} 
                    label="Courses" 
                    path="/courses" 
                    active={location.pathname === '/courses'} 
                />
                <SidebarItem 
                    icon={BarChart3} 
                    label="Analytics" 
                    path="/analytics" 
                    active={location.pathname === '/analytics'} 
                />
                
                <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest mt-8 mb-4 px-2">Settings</div>
                <SidebarItem 
                    icon={Settings} 
                    label="Settings" 
                    path="/settings" 
                    active={location.pathname === '/settings'} 
                />
            </nav>

            <div className="mt-auto border-t border-white/5 pt-4">
                <button className="flex items-center gap-3 p-3 w-full text-text-muted hover:text-accent transition-colors">
                    <LogOut size={20} />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </div>
    );
}

export default Sidebar;