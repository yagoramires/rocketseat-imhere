import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },

  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },

  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },

  input: {
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    height: 56,
    padding: 16,
    color: '#FFF',
    flex: 1,
  },

  formContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: 12,
    marginTop: 36,
    marginBottom: 42,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
});

export default styles;
