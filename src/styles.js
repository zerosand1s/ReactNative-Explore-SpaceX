import { StyleSheet } from 'react-native';

export default globalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'skyblue'
  },
  modalBase: {
    flex: 1,
    marginTop: '20%'
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10    
  },
  modalLinkIconsView: { 
    padding: 10,
    marginTop: 30,
    flexDirection: 'row',
    marginLeft: 20, 
    justifyContent: 'flex-end'
  },
  wikiIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginLeft: 10,
    justifyContent: 'center',
    backgroundColor: '#F0F0F0'
  },
  linkIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginLeft: 10,
    justifyContent: 'center',
    backgroundColor: '#C0C0C0'
  },
  twitterIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginLeft: 10,
    justifyContent: 'center',
    backgroundColor: '#00aced'
  },
  modalCloseIconView: {
    alignItems: 'flex-end',
    marginRight: 10
  }
});