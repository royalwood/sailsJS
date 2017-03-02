var diff = require('deep-diff');

var or = {
    BRANCHID: 81,
    CANCELSTATUS: 1,
    ORDERGROUP: 3,
    ORDERTYPE: 1,
    BRANCHNAME: 'CA',
    CUSTOMERGROUP: 'N/A',
    CUSTOMERNUMBER: 'Y101',
    CUSTOMERNAME: 'CA BRANCH',
    CUSTOMERRANK: 'C',
    SHIPTOADDRESS1: '1521 E. FRANCIS ST., #A',
    SHIPTOADDRESS2: null,
    SHIPTOADDRESS3: null,
    SHIPTOADDRESS4: null,
    SHIPTOCITY: 'ONTARIO',
    SHIPTOSTATE: 'CA',
    SHIPTOZIP: '91761',
    BILLTOADDRESS1: '1521 E. FRANCIS ST., #A',
    BILLTOADDRESS2: null,
    BILLTOADDRESS3: null,
    BILLTOADDRESS4: null,
    BILLTOCITY: 'ONTARIO',
    BILLTOSTATE: 'CA',
    BILLTOZIP: '91761',
    ORDERNUMBER: '111406160',
    DELIVERYNUM: '2080120',
    ORDERDATE: 'Thu Apr 17 2014 08:39:08 GMT-0400 (EDT)',
    DUEDATE: 'Thu Apr 17 2014 08:39:08 GMT-0400 (EDT)',
    RELEASEDDATE: 'Thu Apr 17 2014 08:40:30 GMT-0400 (EDT)',
    REMARKS: 'IT TEST.  IT TEST',
    PONUM: 'SHANE TEST 2014041704',
    CREATEDBY: 'SHANE',
    SHIPVIA: 'WILL CALL',
    CARRIER: 'Will Call',
    UPDATEDSHIPVIA: 'Prepaid (Genera Pay)',
    FREIGHTTERMS: 'Paid',
    POAMOUNT: 2675.31,
    SOAMOUNT: 2675.31,
    CBF: 58.68,
    WEIGHT: 134.28,
    PIECES: 9
};

var ms = {
    BRANCHID: 81,
    CANCELSTATUS: 0,
    ORDERGROUP: 3,
    ORDERTYPE: 1,
    BRANCHNAME: 'CA',
    CUSTOMERGROUP: 'N/A',
    CUSTOMERNUMBER: 'Y101',
    CUSTOMERNAME: 'CA BRANCH',
    CUSTOMERRANK: 'C',
    SHIPTOADDRESS1: '1521 E. FRANCIS ST., #A',
    SHIPTOADDRESS2: null,
    SHIPTOADDRESS3: null,
    SHIPTOADDRESS4: null,
    SHIPTOCITY: 'ONTARIO',
    SHIPTOSTATE: 'CA',
    SHIPTOZIP: '91761',
    BILLTOADDRESS1: '1521 E. FRANCIS ST., #A',
    BILLTOADDRESS2: null,
    BILLTOADDRESS3: null,
    BILLTOADDRESS4: null,
    BILLTOCITY: 'ONTARIO',
    BILLTOSTATE: 'CA',
    BILLTOZIP: '91761',
    ORDERNUMBER: '111406160',
    DELIVERYNUM: '2080120',
    ORDERDATE: 'Thu Apr 17 2014 08:39:08 GMT-0400 (EDT)',
    DUEDATE: 'Thu Apr 17 2014 08:39:08 GMT-0400 (EDT)',
    RELEASEDDATE: 'Thu Apr 17 2014 08:40:30 GMT-0400 (EDT)',
    REMARKS: 'IT TEST.  IT TEST',
    PONUM: 'SHANE TEST 2014041704',
    CREATEDBY: 'SHANE',
    SHIPVIA: 'WILL CALL',
    CARRIER: 'Will Call',
    UPDATEDSHIPVIA: 'Prepaid (Genera Pay)',
    FREIGHTTERMS: 'Paid',
    POAMOUNT: 2675.31,
    SOAMOUNT: 2675.31,
    CBF: 58.68,
    WEIGHT: 134.28,
    PIECES: 9
};

var differences = diff(or, ms);

console.log(differences);