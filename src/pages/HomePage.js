import Typography from '@material-ui/core/Typography';

const styles = {
  container: {
    minHeight: 'calc(100vh - 120px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomePage = () => (
  <div style={styles.container}>
    <Typography variant="h2" gutterBottom>
      PRODUCT LIST
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      Создай свои товары
    </Typography>
  </div>
);

export default HomePage;
