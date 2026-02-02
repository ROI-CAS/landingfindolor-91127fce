import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";

interface VersionSwitcherV3Props {
  currentVersion: "v1" | "v2" | "v3";
}

const versions = [
  { id: "v1", path: "/", label: "Original" },
  { id: "v2", path: "/v2", label: "Versión B" },
  { id: "v3", path: "/v3", label: "Versión C" },
];

export function VersionSwitcherV3({ currentVersion }: VersionSwitcherV3Props) {
  const otherVersions = versions.filter((v) => v.id !== currentVersion);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-3 right-3 md:top-4 md:right-4 z-50"
    >
      <div className="flex items-center gap-2 bg-foreground/95 backdrop-blur-sm text-background px-3 py-2 md:px-4 md:py-2.5 rounded-full text-xs md:text-sm font-medium shadow-lg">
        <Layers className="w-3.5 h-3.5 md:w-4 md:h-4" />
        <span className="hidden sm:inline">Ver:</span>
        {otherVersions.map((version, index) => (
          <span key={version.id} className="flex items-center">
            {index > 0 && (
              <span className="text-background/40 mx-1 hidden sm:inline">|</span>
            )}
            <Link
              to={version.path}
              className="flex items-center gap-1 hover:text-secondary transition-colors duration-200"
            >
              <span>{version.label}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </span>
        ))}
      </div>
    </motion.div>
  );
}
