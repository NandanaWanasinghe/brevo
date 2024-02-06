const SibApiV3Sdk = require('sib-api-v3-sdk');

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'https://api.brevo.com/v3/';

const apiInstance = new SibApiV3Sdk.ContactsApi();
const apiListsInstance = new SibApiV3Sdk.ListsApi();

const createContact = async (req, res) => {
  try {
    const { email, firstName, lastName, phoneNumber, listId } = req.body;

    const createContact = {
      email,
      attributes: {
        SMS: phoneNumber,
        FNAME: firstName,
        LNAME: lastName
      },
      listIds: [listId],
      emailBlacklisted: false,
      smsBlacklisted: false,
      updateEnabled: false
    };

    const data = await apiInstance.createContact(createContact);
    console.log('API called successfully. Returned data:', data);

    res.json({ message: 'Contact created successfully', brevoData: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getListNames = async (req, res) => {
  try {
    const data = await apiListsInstance.getLists();
    const listNames = data.lists.map(list => list.name);
    res.json({ listNames });
  } catch (error) {
    console.error( error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {createContact, getListNames}