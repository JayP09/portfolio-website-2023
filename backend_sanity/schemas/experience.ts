export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    },
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date',
      options: {
        dateFormat: 'MM-YYYY',
      },
    },
    {
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'date',
      options: {
        dateFormat: 'MM-YYYY',
      },
    },
  ],
}
