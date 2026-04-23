import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";
import { motion, AnimatePresence } from "framer-motion";

const DashboardLayout = () => {
    return (
        <div className="flex h-screen bg-background text-text-main overflow-hidden">
            {/* Background decorative blobs */}
            <div className="fixed top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="fixed bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <Sidebar />
            <div className="flex-1 flex flex-col relative z-10 overflow-hidden">
                <Navbar />
                <main className="flex-1 overflow-y-auto p-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;