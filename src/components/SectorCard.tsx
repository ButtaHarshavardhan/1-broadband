import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const SectorCard = ({ post, delay, expanded, onClick }: { post: any, delay: number, expanded: boolean, onClick: () => void, key?: React.Key }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 cursor-pointer shadow-lg hover:border-sky-500/50 transition-colors"
      onClick={onClick}
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={post.img} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
           <span className="text-white backdrop-blur-md bg-black/50 border border-white/10 px-3 py-1 rounded-full text-xs font-medium">{post.category}</span>
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-white transition-colors leading-snug mb-3 hover:text-sky-400">
          {post.title}
        </h4>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              {post.content}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
