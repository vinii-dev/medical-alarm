import { extendTheme } from 'native-base';
import sizes from 'native-base/lib/typescript/theme/base/sizes';

export const theme = extendTheme({
  components: {
    Badge: {
      defaultProps: {
        rounded: 'full',
        _text: {
          fontSize: 15
        }
      }
    },
    Text: {
      defaultProps: {
        color: "muted.600"
      }
    },
    Input: {
      defaultProps: {
        "_focus": {
          borderColor: 'primary.500',
          bgColor: 'white',
          borderWidth: 2
        },
        style: {
          marginHorizontal: 6,
        },
        size: 'xl',
        borderRadius: 'md',
        padding: 3,
        numberOfLines: 1,
      }
    },
    IconButton: {
      defaultProps: {
        padding: 2,
        rounded: 'xl',
        size: 'lg',
        '_text': { bold: true },
      },
      sizes: {
        lg: {
          fontSize: '64px',
        }
      }
    },
    Button: {
      defaultProps: {
        padding: 3,
        rounded: '2xl',
        size: 'lg',
        numberOfLines: 1,
        '_text': { bold: true },
      },
      sizes: {
        lg: {
          fontSize: '64px',
        }
      }
    }
  },
});
