import styles from './post-body.module.css'
import { motion } from 'framer-motion'

export default function PostBody({ content }) {
  return (
    <motion.div 
      transition={{ delay: 0.2, duration: 0.2, ease: "easeOut" }}
      initial={{ opacity: 0, y: 50 }} 
      animate={{opacity: 1, y:0}} 
      className="max-w-2xl mx-auto break-words"
    >
      {content.map((section, index)=>(
        <div key={index}
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: section.text }}
      />
      ))}
      
    </motion.div>
  )
}
