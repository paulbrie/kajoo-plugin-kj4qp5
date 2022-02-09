import React from 'react'
import useFiles from "../lib/teleport/useFiles";
import useUidl from "../lib/teleport/useUidl";

import Component from '../teleporthq/components/component'
import styles from '../teleporthq/style.module.css'

const Demo = () => {
    const files = useFiles()
    const uidl = useUidl()
    return (<div className={styles['red']}>Demo Page 
    <Component heading="Hello Yusuf!" />
    <div>
        {Object.keys(files).map((key) => (
          <div>{key}</div>
        ))}
      </div>
      <code><pre> {JSON.stringify(uidl, null, 2)}</pre></code>
    </div>)
}

export default Demo