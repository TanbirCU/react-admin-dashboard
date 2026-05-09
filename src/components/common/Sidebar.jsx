import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    LayoutDashboard, 
    Users, 
    BookOpen, 
    Settings, 
    LogOut, 
    ChevronRight,
    BarChart3,
    Shield,
    ChevronDown,
    PlusCircle,
    List
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SidebarItem = ({ icon: Icon, label, path, active, isSubItem = false }) => (
    <Link to={path}>
        <motion.div 
            whileHover={{ x: 5 }}
            className={`flex items-center justify-between p-3 rounded-lg mb-1 transition-all ${
                active 
                ? 'bg-primary/20 text-primary border-l-4 border-primary' 
                : 'text-text-muted hover:bg-surface-hover hover:text-text-main'
            } ${isSubItem ? 'ml-6 py-2' : ''}`}
        >
            <div className="flex items-center gap-3">
                <Icon size={isSubItem ? 18 : 20} />
                <span className={`${isSubItem ? 'text-sm' : 'font-medium'}`}>{label}</span>
            </div>
            {active && !isSubItem && <ChevronRight size={16} />}
        </motion.div>
    </Link>
);

const SidebarDropdown = ({ icon: Icon, label, items, active, isOpen, onToggle }) => {
    return (
        <div className="mb-1">
            <motion.div 
                whileHover={{ x: 5 }}
                onClick={onToggle}
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                    active 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-text-muted hover:bg-surface-hover hover:text-text-main'
                }`}
            >
                <div className="flex items-center gap-3">
                    <Icon size={20} />
                    <span className="font-medium">{label}</span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown size={16} />
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        {items.map((item, index) => (
                            <SidebarItem 
                                key={index}
                                icon={item.icon}
                                label={item.label}
                                path={item.path}
                                active={item.active}
                                isSubItem={true}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Sidebar = () => {
    const location = useLocation();
    const [openDropdowns, setOpenDropdowns] = useState({
        courses: location.pathname.startsWith('/courses'),
        management: false
    });

    const toggleDropdown = (key) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

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

            <nav className="flex-1 overflow-y-auto custom-scrollbar">
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
                
                <SidebarDropdown 
                    icon={BookOpen}
                    label="Courses"
                    isOpen={openDropdowns.courses}
                    onToggle={() => toggleDropdown('courses')}
                    active={location.pathname.startsWith('/courses')}
                    items={[
                        { icon: List, label: 'Course List', path: '/courses', active: location.pathname === '/courses' },
                        { icon: PlusCircle, label: 'Add Course', path: '/courses/create', active: location.pathname === '/courses/create' },
                    ]}
                />

                <SidebarDropdown 
                    icon={Shield}
                    label="Management"
                    isOpen={openDropdowns.management}
                    onToggle={() => toggleDropdown('management')}
                    active={false}
                    items={[
                        { icon: List, label: 'View All', path: '/management/list', active: false },
                        { icon: PlusCircle, label: 'Create New', path: '/management/add', active: false },
                    ]}
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