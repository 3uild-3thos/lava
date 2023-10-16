import { defineConfig } from 'windicss/helpers'
export default defineConfig({
    darkMode: 'class', // or 'media'
    theme: {
     extend: {
        colors: {
            lava: {
                bg: '#131316',
                card: '#1E1F22',
                900: '#18181B',
                800: '#26272B',
                700: '#383A41',
                white: '#FCFCFC',
                primary: '#F4F4F5',
                secondary: '#D1D1D6',
                mute: '#A0A0AB', 
                success: '#54FE98',
                error: '#FE5468'
            }
        },
        fontFamily: {
            sans: ['Inter','-apple-system','BlinkMacSystemFont','Roboto','sans-serif'],
            mono: ['JetBrains Mono', 'mono-space']
        }
    }
        
    }
    }
)