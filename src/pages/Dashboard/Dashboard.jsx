import { motion } from 'framer-motion';
import { 
    Users, 
    BookOpen, 
    DollarSign, 
    TrendingUp, 
    TrendingDown,
    Calendar,
    ArrowUpRight,
    MoreVertical
} from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, trend, color, delay }) => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay }}
        className="premium-card rounded-2xl p-6 relative overflow-hidden group"
    >
        <div className={`absolute top-0 right-0 w-24 h-24 bg-${color}/10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110`}></div>
        
        <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-xl bg-${color}/20 text-${color}`}>
                <Icon size={24} />
            </div>
            {trend && (
                <div className={`flex items-center gap-1 text-xs font-bold ${trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {trend > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {Math.abs(trend)}%
                </div>
            )}
        </div>
        
        <div>
            <h3 className="text-text-muted text-sm font-medium mb-1">{title}</h3>
            <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-text-main">{value}</span>
            </div>
        </div>
    </motion.div>
);

const ActivityItem = ({ title, time, status, color }) => (
    <div className="flex items-center justify-between p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
        <div className="flex items-center gap-4">
            <div className={`w-2 h-2 rounded-full bg-${color}`}></div>
            <div>
                <div className="text-sm font-medium text-text-main">{title}</div>
                <div className="text-xs text-text-muted">{time}</div>
            </div>
        </div>
        <div className={`text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded bg-${color}/10 text-${color}`}>
            {status}
        </div>
    </div>
);

function Dashboard() {
    return (
        <div className="space-y-8">
            <header className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-text-main mb-2">Dashboard Overview</h1>
                    <p className="text-text-muted">Welcome back, Tanvir! Here's what's happening today.</p>
                </div>
                <button className="flex items-center gap-2 bg-primary hover:bg-primary/8 hover:scale-105 active:scale-95 transition-all text-white px-4 py-2 rounded-xl font-medium shadow-lg shadow-primary/25">
                    <Calendar size={18} />
                    <span>Download Report</span>
                </button>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard 
                    title="Total Users" 
                    value="1,284" 
                    icon={Users} 
                    trend={12} 
                    color="primary"
                    delay={0.1}
                />
                <StatCard 
                    title="Active Courses" 
                    value="42" 
                    icon={BookOpen} 
                    trend={5} 
                    color="secondary"
                    delay={0.2}
                />
                <StatCard 
                    title="Total Revenue" 
                    value="$12,840" 
                    icon={DollarSign} 
                    trend={-2} 
                    color="accent"
                    delay={0.3}
                />
                <StatCard 
                    title="Conversion Rate" 
                    value="4.2%" 
                    icon={TrendingUp} 
                    trend={0.5} 
                    color="green-400"
                    delay={0.4}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart Placeholder */}
                <div className="lg:col-span-2 premium-card rounded-3xl p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold">Revenue Growth</h2>
                        <select className="bg-surface border border-white/5 text-xs text-text-muted rounded-lg px-2 py-1 focus:outline-none">
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                        </select>
                    </div>
                    {/* Placeholder for a chart */}
                    <div className="h-64 w-full flex items-end gap-2 px-2 pb-2">
                        {[40, 70, 45, 90, 65, 80, 50, 85, 60, 95, 75, 100].map((h, i) => (
                            <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ delay: 0.5 + (i * 0.05), duration: 0.8 }}
                                className="flex-1 bg-gradient-to-t from-primary/40 to-primary rounded-t-lg relative group"
                            >
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface text-[10px] px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    ${h * 10}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-[10px] text-text-muted font-medium px-2">
                        <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
                        <span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span><span>NOV</span><span>DEC</span>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="premium-card rounded-3xl overflow-hidden flex flex-col">
                    <div className="p-6 pb-2 flex justify-between items-center">
                        <h2 className="text-lg font-bold">Recent Activity</h2>
                        <button className="text-text-muted hover:text-text-main"><MoreVertical size={18} /></button>
                    </div>
                    <div className="flex-1">
                        <ActivityItem 
                            title="New User Registered" 
                            time="2 minutes ago" 
                            status="Pending" 
                            color="secondary" 
                        />
                        <ActivityItem 
                            title="Course Purchase: React 101" 
                            time="15 minutes ago" 
                            status="Completed" 
                            color="green-400" 
                        />
                        <ActivityItem 
                            title="System Update v2.1" 
                            time="1 hour ago" 
                            status="Success" 
                            color="primary" 
                        />
                        <ActivityItem 
                            title="Failed Login Attempt" 
                            time="3 hours ago" 
                            status="Warning" 
                            color="accent" 
                        />
                        <ActivityItem 
                            title="Refund Requested #8821" 
                            time="5 hours ago" 
                            status="Review" 
                            color="yellow-400" 
                        />
                    </div>
                    <button className="p-4 text-xs font-bold text-primary hover:bg-primary/5 transition-colors text-center uppercase tracking-widest">
                        View All Activity
                    </button>
                </div>
            </div>

            {/* Courses Table Placeholder */}
            <div className="premium-card rounded-3xl overflow-hidden">
                <div className="p-6 flex justify-between items-center">
                    <h2 className="text-lg font-bold">Popular Courses</h2>
                    <button className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
                        Explore All <ArrowUpRight size={16} />
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-white/5 text-[10px] uppercase font-bold tracking-widest text-text-muted">
                                <th className="px-6 py-4">Course Name</th>
                                <th className="px-6 py-4">Instructor</th>
                                <th className="px-6 py-4">Students</th>
                                <th className="px-6 py-4">Earnings</th>
                                <th className="px-6 py-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-white/5">
                            {[
                                { name: "Advance React Patterns", instructor: "Sarah Drasner", students: 1205, earnings: "$12,400", status: "Active", color: "green-400" },
                                { name: "Creative CSS Mastery", instructor: "Kevin Powell", students: 850, earnings: "$8,500", status: "Active", color: "green-400" },
                                { name: "Vite & Modern Tooling", instructor: "Evan You", students: 2100, earnings: "$21,000", status: "Archived", color: "text-muted" }
                            ].map((course, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4 font-medium text-text-main group-hover:text-primary transition-colors cursor-pointer">{course.name}</td>
                                    <td className="px-6 py-4 text-text-muted">{course.instructor}</td>
                                    <td className="px-6 py-4 text-text-main">{course.students.toLocaleString()}</td>
                                    <td className="px-6 py-4 font-bold text-text-main">{course.earnings}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${course.status === 'Active' ? 'bg-green-400/10 text-green-400' : 'bg-surface-hover text-text-muted'}`}>
                                            {course.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;