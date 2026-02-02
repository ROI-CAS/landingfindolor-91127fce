import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TestTube } from "lucide-react";

interface VersionSwitcherProps {
  currentVersion: "v1" | "v2";
}

export function VersionSwitcher({ currentVersion }: VersionSwitcherProps) {
  const otherVersion = currentVersion === "v1" ? "v2" : "v1";
  const otherPath = currentVersion === "v1" ? "/v2" : "/";
  const label = currentVersion === "v1" ? "Versión B (Nueva)" : "Versión A (Original)";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 z-50"
    >
      <Link
        to={otherPath}
        className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform"
      >
        <TestTube className="w-4 h-4" />
        <span>Ver {label}</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
