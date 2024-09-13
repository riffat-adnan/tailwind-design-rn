module.exports = {
  content: [
    './src/screens/**/*/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        p1: '#E0007F',
        p2: '#CC0174',
        p3: '#FFEBF6',
        background: '#F0F0F0',
        activeDot: '#FF9AD4',
        dot: '#FF9AD480',
        grey1: '#344054',
        grey2: '#D0D5DD',
        grey3: '#475467',
        black1: '#101828',
        placeholder: '#667085',
        bluedotted: '#FEG845',
      },
      fontFamily: {
        interBold: ['Inter-Bold'],
        interSemibold: ['Inter-SemiBold'],
        interRegular: ['Inter-Regular'],
        interMedium: ['Inter-Medium'],
      },
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};
