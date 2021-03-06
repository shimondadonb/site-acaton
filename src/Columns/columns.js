import {formatDate, formatNumber} from '@elastic/eui/lib/services/format';

export const incomeOutcomeColumn = [
    // {
    //     id: 'date',
    //     label: 'תאריך',
    //     width: 50,
    //     align: 'right',
    //     format: (value) => {
    //         return new Date(value).toLocaleDateString("en-US")
    //     },
    // },
    {
        id: 'amount',
        label: 'סכום',
        align: 'right',
        // minWidth: 250,
        // maxWidth: 350,
    },
    {
        id: 'name',
        label: 'שם',
        align: 'right',
        // minWidth: 250,
        // maxWidth: 350,
    },
    // {
    //     field: 'github',
    //     name: (
    //         <EuiToolTip content="Their mascot is the Octokitty">
    //   <span>
    //     Github{' '}
    //       <EuiIcon
    //           size="s"
    //           color="subdued"
    //           type="questionInCircle"
    //           className="eui-alignTop"
    //       />
    //   </span>
    //         </EuiToolTip>
    //     ),
    //     render: (username) => (
    //         <EuiLink href={`https://github.com/${username}`} target="_blank">
    //             {username}
    //         </EuiLink>
    //     ),
    // },
    // {
    //     field: 'nationality',
    //     name: (
    //         <EuiToolTip content="The nation in which this person resides">
    //   <span>
    //     Nationality{' '}
    //       <EuiIcon
    //           size="s"
    //           color="subdued"
    //           type="questionInCircle"
    //           className="eui-alignTop"
    //       />
    //   </span>
    //         </EuiToolTip>
    //     ),
    //     render: (countryCode) => {
    //         const country = store.getCountry(countryCode);
    //         return `${country.flag} ${country.name}`;
    //     },
    // },
    // {
    //     field: 'online',
    //     name: (
    //         <EuiToolTip content="Free to talk or busy with business">
    //   <span>
    //     Online{' '}
    //       <EuiIcon
    //           size="s"
    //           color="subdued"
    //           type="questionInCircle"
    //           className="eui-alignTop"
    //       />
    //   </span>
    //         </EuiToolTip>
    //     ),
    //     schema: 'boolean',
    //     render: (online) => {
    //         const color = online ? 'success' : 'danger';
    //         const label = online ? 'Online' : 'Offline';
    //         return <EuiHealth color={color}>{label}</EuiHealth>;
    //     },
    // },
];

export const loanColumn = [
    {
        id: 'loan_name',
        label: 'שם',
        align: 'right',
        // minWidth: 250,
        // maxWidth: 350,
    },
    {
        id: 'start_date',
        label: 'תאריך התחלה',
        width: 150,
        align: 'right',
        format: (value) => {
            return new Date(value).toLocaleDateString("en-US")
        },
    },
    {
        id: 'ammount',
        label: 'סכום',
        align: 'right',
        // minWidth: 250,
        // maxWidth: 350,
    },
    {
        id: 'monthly_repayment',
        label: 'החזר בחודש',
        align: 'right',
        // minWidth: 250,
        // maxWidth: 350,
    },
    {
        id: 'num_of_payments',
        label: 'מספר תשלומים',
        align: 'right',
        // minWidth: 250,
        // maxWidth: 350,
    },
    {
        id: 'end_date',
        label: 'תאריך סיום',
        width: 150,
        align: 'right',
        format: (value) => {
            return new Date(value).toLocaleDateString("en-US")
        },
    },
]

export const propertiesColumn = [
    {
        id: 'type',
        label: 'סוג',
        minWidth: 50,
        maxWidth: 50,
        align: 'right',
    },
    {
        id: 'value',
        label: 'שווי',
        align: 'right',
        minWidth: 50,
        maxWidth: 50,
    },
    {
        id: 'loan',
        label: 'הלוואות על הנכס',
        align: 'right',
        minWidth: 50,
        maxWidth: 50,
    },
];

export const targetColumn = [
    {
        id: 'date',
        label: 'תאריך',
        width: 180,
        minWidth: 80,
        maxWidth: 80,
        align: 'right',
        format: (value) => {
            return new Date(value).toLocaleDateString("en-US")
        },
    },
    {
        id: 'name',
        label: 'שם',
        align: 'right',
        minWidth: 50,
        maxWidth: 50,
    },
];
