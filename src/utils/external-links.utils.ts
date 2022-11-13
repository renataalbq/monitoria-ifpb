import { Alert, Linking } from 'react-native';

const DDI = '55';

const callPhone = (phone: string) => {
  return openUrl(`tel:${phone}`);
};

const openUrl = async (url: string): Promise<boolean> => {
  try {
    const supported: boolean = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.warn(`Link ${url} not supported.`);
    }
    return supported;
  } catch (error) {
    console.error('An error occurred:', error);
    Alert.alert(externalNavigatorStrings.message);
    return false;
  }
};

const openWhatsapp = async (phone: string) => {
  const telephone = phone.startsWith(DDI) ? phone : `${DDI}${phone}`;
  await openUrl(encodeURI(`https://wa.me/${telephone}`));
};

const sendEmail = (email: string) => {
  return openUrl(`mailto:${email}`);
};

export const ExternalLinkUtils = {
  callPhone,
  openWhatsapp,
  sendEmail,
};

const externalNavigatorStrings = {
  message: 'Não conseguimos acessar o link, favor verificar e tentar novamente',
};