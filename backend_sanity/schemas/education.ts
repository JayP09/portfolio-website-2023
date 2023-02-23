export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'universityName',
      title: 'university Name',
      type: 'string',
    },
    {
      name: 'percentage',
      title: 'Percentage',
      type: 'number',
    },
    {
      name: 'yearStarted',
      title: 'Year Started',
      type: 'date',
      options: {
        dateformat: 'YYYY-MM-DD',
      },
    },
    {
      name: 'yearEnded',
      title: 'Year Ended',
      type: 'date',
      options: {
        dateformat: 'YYYY',
      },
    },
  ],
}
