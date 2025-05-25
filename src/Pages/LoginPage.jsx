import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [particles, setParticles] = useState([]);
  const navigate = useNavigate();

  // Floating particles animation
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 3,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      color: `rgba(0, 179, 204, ${Math.random() * 0.3 + 0.1})`
    }));
    setParticles(newParticles);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      if (email === 'demo@naifdigital.com' && password === 'demo123') {
        navigate('/dashboard');
      } else {
        setError('Invalid credentials. Try demo@naifdigital.com / demo123');
      }
      setLoading(false);
    }, 1500);
  };

  const socialLogins = [
    { name: 'Google', icon: 'M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.545,6.476,2.545,12s4.476,10,10,10c8.396,0,10-7.496,10-10c0-0.671-0.068-1.369-0.188-2H12.545z', color: 'bg-red-500' },
    { name: 'Microsoft', icon: 'M11.5,3h8.5v8.5h-8.5V3z M11.5,12.5h8.5V21h-8.5V12.5z M3,3h8.5v8.5H3V3z M3,12.5h8.5V21H3V12.5z', color: 'bg-green-500' },
    { name: 'LinkedIn', icon: 'M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M8.5,18H5.5v-9h3V18z M7,7.5C6.172,7.5,5.5,6.828,5.5,6S6.172,4.5,7,4.5S8.5,5.172,8.5,6S7.828,7.5,7,7.5z M18.5,18h-3v-4.5c0-1.379-1.121-2.5-2.5-2.5S10,12.121,10,13.5V18H7v-9h3v1.5h0.5c0.689,0,1.313-0.333,1.707-0.855C12.604,9.333,13.228,9,13.917,9C15.194,9,16.5,10.306,16.5,11.5V18z', color: 'bg-blue-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F3F] to-[#003366] overflow-hidden relative flex items-center justify-center p-4">
      {/* Animated background particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            backgroundColor: particle.color,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ y: 0, x: 0 }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Main login card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20 relative z-10"
      >
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-[#00C4FF]/30 via-[#00b3cc]/10 to-[#00FFC4]/30 pointer-events-none"></div>

        <div className="p-8">
          {/* Logo and header */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-xl mb-4">
            <img src="naifdigital-logo-without-frame.png" alt="" />
            </div>
            <h1 className="text-2xl font-bold text-white">Naif Digital</h1>
            <p className="text-white/80 mt-2">Enterprise Solutions Platform</p>
          </motion.div>

          {/* Tabs */}
          <div className="flex mb-8 bg-white/10 rounded-xl p-1 border border-white/10">
            {['login', 'register'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-white/20 text-white shadow-sm'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {tab === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            ))}
          </div>

          {/* Form */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === 'login' ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeTab === 'login' ? 20 : -20 }}
              transition={{ duration: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#00b3cc] focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-5 w-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#00b3cc] focus:border-transparent"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/50 hover:text-white"
                    >
                      {showPassword ? (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {activeTab === 'login' && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 bg-white/5 border-white/10 rounded focus:ring-[#00b3cc] text-[#00b3cc]"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-white/80">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="#" className="font-medium text-[#00b3cc] hover:text-[#00C4FF]">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-500/20 text-red-100 rounded-lg text-sm border border-red-500/30"
                  >
                    {error}
                  </motion.div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#00b3cc] to-[#00ccb3] hover:from-[#00a3cc] hover:to-[#00bbcc] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00b3cc] transition-all duration-300 ${
                      loading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      activeTab === 'login' ? 'Sign In' : 'Create Account'
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </AnimatePresence>

          {/* Social login */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-white/70">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {socialLogins.map((social) => (
                <motion.div
                  key={social.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="#"
                    className={`w-full inline-flex justify-center py-2 px-4 rounded-lg ${social.color} text-white shadow-sm hover:opacity-90`}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d={social.icon} />
                    </svg>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 bg-white/5 text-center border-t border-white/10">
          <p className="text-xs text-white/50">
            {activeTab === 'login' 
              ? "Don't have an account? " 
              : "Already have an account? "}
            <button
              onClick={() => setActiveTab(activeTab === 'login' ? 'register' : 'login')}
              className="text-[#00b3cc] hover:text-[#00C4FF] font-medium"
            >
              {activeTab === 'login' ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </motion.div>

      {/* Floating animation elements */}
      <motion.div
        className="absolute bottom-10 left-10 w-40 h-40 bg-[#00C4FF]/10 rounded-full filter blur-xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute top-20 right-20 w-60 h-60 bg-[#00FFC4]/10 rounded-full filter blur-xl opacity-15"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 2
        }}
      />
    </div>
  );
};

export default LoginPage;