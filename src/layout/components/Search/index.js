import styles from "./Search.module.scss";
import classNames from "classnames/bind";

import * as searchService from "~/apiServices/searchServices";
import { useState, useEffect, useRef } from "react";
import { useDebounce } from "~/hooks";

import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import { SearchIcon } from "~/components/Icon";
import { MdClear } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 600);

    const inputRef = useRef();
    useEffect(() => {
        // giữ phím backspace liên tục thì setSearchResult([]) không hoạt động
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debouncedValue);

            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue("");
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <PopperWrapper>
                        <div
                            className={cx("search-result")}
                            tabIndex='-1'
                            {...attrs}>
                            <h4 className={cx("search-title")}>Accounts</h4>
                            {searchResult.map((result) => {
                                return (
                                    <AccountItem
                                        key={result.id}
                                        data={result}
                                    />
                                );
                            })}
                        </div>
                    </PopperWrapper>
                )}
                onClickOutside={handleHideResult}>
                <div className={cx("search")}>
                    <input
                        value={searchValue}
                        ref={inputRef}
                        placeholder='Search'
                        type='text'
                        spellCheck={false}
                        onChange={(e) => {
                            if (!e.target.value.startsWith(" "))
                                setSearchValue(e.target.value);
                        }}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx("clear")} onClick={handleClear}>
                            <MdClear />
                        </button>
                    )}
                    {loading && (
                        <span className={cx("loading")}>
                            <AiOutlineLoading3Quarters />
                        </span>
                    )}
                    <span className={cx("spliter")}></span>
                    <button
                        className={cx("search-btn")}
                        onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon width='2.4rem' height='2.4rem' />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
