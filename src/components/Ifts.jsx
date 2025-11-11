const Ifts = () => {
    return (
        <>
            <div className="ifts-info">
                <div>
                    <a id="ifts" target="_blank" href="https://ifts29.edu.ar/">
                        <h3>IFTS <span>N.°29</span></h3>
                    </a>
                </div>
            </div>
            <style>
                {`
                    .ifts-info h3,
                    a {
                        font-size: .8rem;
                        color: var(--header-fg);
                        margin: 0;
                    }
                    .ifts-info > div > a#ifts > h3 {
                        color: var(--text-main);
                        border-radius: 30px 30px;
                        display: inline;
                        background-color: var(--header-fg);
                    }
                    .ifts-info>div>a>h3>span {
                        font-size: .8rem;
                        font-weight: bolder;
                    }
                `}
            </style>
        </>
    );
}

export default Ifts;