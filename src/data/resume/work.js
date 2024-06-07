/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Fish & Richardson P.C.',
    position: 'Summer Associate',
    url: 'https://fr.com',
    startDate: '2023-05-20',
    summary: `Fish & Richardson is a leading global intellectual property law firm known for its expertise in patents, trademarks, copyrights, and trade secrets. The firm serves a diverse range of clients, from startups to multinational corporations, across various industries. As a summer associate at Fish & Richardson, I assist with legal research, draft documents, and support attorneys in various aspects of IP law.`,
    highlights: [
      'Drafted motions and prepared legal documents.',
      'Reviewed patent file histories to identify relevant claim amendments, examiner communications, and prior art references.',
      'Assisted senior attorneys in reviewing source code in patent litigation cases and developing legal arguments and strategies.',
      'Developed strategies for responses to USPTO Office Actions.',
    ],
  },
  {
    name: 'Paul Tsai China Center',
    position: 'Research Assistant',
    url: 'https://law.yale.edu/china-center',
    startDate: '2023',
    summary: `Studied the history and impact of LGBTQ+ rights legislation in China.`,
    highlights: [
      '[Placeholder]',
    ],
  },
  {
    name: 'Yale Economic Growth Center',
    position: 'Research Assistant',
    url: 'https://egc.yale.edu',
    startDate: '2022',
    endDate: '2023',
    summary: `Studied the recent rapid expansion of social audits initiative of Bihar, India to improve access and delivery of social protection under India’s national workfare scheme. Engineered datasets to prepare for machine learning and statistical analysis. Investigated the effectiveness of social audits using causal forests.`,
  },
  {
    name: 'RA to Prof. Zachary Liscow',
    position: 'Research Assistant',
    url: 'https://law.yale.edu/zachary-liscow',
    startDate: '2024',
    summary: `[Placeholder]`,
    highlights: [
    ],
  },
];

export default work;
