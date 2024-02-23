import {connect} from "react-redux"
import {motion} from 'framer-motion'

function Layout({ children }) {
    return (
      <motion.div
        initial={{ opacity: 0, transition: { duration: 0.8 } }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1, transition: { duration: 0.8 } }}
      >
        {children}
      </motion.div>
    );
  }
  
  const mapStateToProps = state => ({
    // Puedes mapear el estado de Redux a props si es necesario
  });
  
  export default connect(mapStateToProps, {})(Layout);
  