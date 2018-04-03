传入 sn,code,result
<!-- IF EXISTS (SELECT * FROM a70 WHERE SN=sn) THEN
    SELECT * FROM a70 WHERE SN=sn -->
QUERY_RESULT = cur.execute("SELECT * FROM a70 CASE WHEN SN=sn THEN 'YES' ELSE 'NO'")
if QUERY_RESULT == 'YES':
    cur.execute("SELECT * FROM a70 WHERE SN=sn")
    value = cur.fetchone()
    CODE = value[2]
    RESULT = value[3]
    if CODE == "FAIL" and code == "FAIL":
        code = "SECOND-FAIL"
    elif CODE == "SECOND-FAIL" and code == "FAIL":
        code = "THIRD-FAIL"
    elif CODE == "FAIL" and code == "PASS":
        code = "RETEST-PASS"
    elif CODE == "SECOND-FAIL" and code == "PASS":
        code = "NTF-PASS"
    else:
        code = CODE
        result = RESULT
    cur.execute("UPDATE a70 SET CODE=code RESULT=result WHERE SN=sn")
    conn.commit()
else:
    cur.execute("INSERT INTO a70 (SN, CODE, RESULT) VALUES ('%s', '%s', '%s')" % (sn, code, result))
    conn.commit()
