// =========================================================
// LIBRARY HUB - CORE LOGIC & BOOK INVENTORY MANAGEMENT
// =========================================================

// =========================================================
// 1. DEFAULT SEED DATA
// =========================================================

const DEFAULT_BOOKS = [
    {
        id: "BOOK-001",
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        author: "Robert C. Martin",
        category: "Computer Science",
        isbn: "978-0132350884",
        year: 2008,
        totalCopies: 5,
        availableCopies: 4,
        shelf: "CS-101",
        status: "Available",
        description: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. A timeless guide for writing maintainable software.",
        image: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
        bgGradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
        icon: "fa-code"
    },
    {
        id: "BOOK-002",
        title: "The Pragmatic Programmer: Your Journey To Mastery",
        author: "Andrew Hunt, David Thomas",
        category: "Software Dev",
        isbn: "978-0201616224",
        year: 1999,
        totalCopies: 4,
        availableCopies: 3,
        shelf: "CS-102",
        status: "Available",
        description: "A classic software engineering book illustrating modern best practices, pragmatic thinking, code craftsmanship, and career mastery.",
        image: "https://covers.openlibrary.org/b/isbn/9780201616224-L.jpg",
        bgGradient: "linear-gradient(135deg, #4c1d95 0%, #8b5cf6 100%)",
        icon: "fa-laptop-code"
    },
    {
        id: "BOOK-003",
        title: "Introduction to Algorithms (4th Edition)",
        author: "Thomas H. Cormen, Charles E. Leiserson",
        category: "Computer Science",
        isbn: "978-0262033848",
        year: 2022,
        totalCopies: 6,
        availableCopies: 4,
        shelf: "CS-103",
        status: "Available",
        description: "Comprehensive textbook covering algorithms in depth with rigorous analysis, data structures, greedy algorithms, and dynamic programming.",
        image: "https://covers.openlibrary.org/b/isbn/9780262033848-L.jpg",
        bgGradient: "linear-gradient(135deg, #065f46 0%, #10b981 100%)",
        icon: "fa-network-wired"
    },
    {
        id: "BOOK-004",
        title: "Design Patterns: Elements of Reusable Object-Oriented Software",
        author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
        category: "Software Dev",
        isbn: "978-0201633610",
        year: 1994,
        totalCopies: 3,
        availableCopies: 2,
        shelf: "CS-104",
        status: "Available",
        description: "The Gang of Four's seminal work on design patterns providing 23 reusable solutions to common software engineering architecture challenges.",
        image: "https://covers.openlibrary.org/b/isbn/9780201633610-L.jpg",
        bgGradient: "linear-gradient(135deg, #831843 0%, #db2777 100%)",
        icon: "fa-cubes"
    },
    {
        id: "BOOK-005",
        title: "Artificial Intelligence: A Modern Approach",
        author: "Stuart Russell, Peter Norvig",
        category: "AI & Data Science",
        isbn: "978-0136042594",
        year: 2020,
        totalCopies: 4,
        availableCopies: 4,
        shelf: "AI-201",
        status: "Available",
        description: "The leading AI textbook worldwide, exploring intelligent agents, search algorithms, probabilistic reasoning, machine learning, and deep neural nets.",
        image: "https://covers.openlibrary.org/b/isbn/9780136042594-L.jpg",
        bgGradient: "linear-gradient(135deg, #701a75 0%, #c026d3 100%)",
        icon: "fa-brain"
    },
    {
        id: "BOOK-006",
        title: "Deep Learning",
        author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
        category: "AI & Data Science",
        isbn: "978-0262035613",
        year: 2016,
        totalCopies: 4,
        availableCopies: 3,
        shelf: "AI-202",
        status: "Available",
        description: "An introduction to a broad range of topics in deep learning, covering mathematical and conceptual background, deep networks, and research perspectives.",
        image: "https://covers.openlibrary.org/b/isbn/9780262035613-L.jpg",
        bgGradient: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)",
        icon: "fa-microchip"
    },
    {
        id: "BOOK-007",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        category: "Fiction",
        isbn: "978-0061120084",
        year: 1960,
        totalCopies: 4,
        availableCopies: 4,
        shelf: "FIC-301",
        status: "Available",
        description: "A Pulitzer Prize-winning masterpiece exploring racial injustice, compassion, and courage in the American Deep South through the eyes of Scout Finch.",
        image: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
        bgGradient: "linear-gradient(135deg, #78350f 0%, #d97706 100%)",
        icon: "fa-feather-pointed"
    },
    {
        id: "BOOK-008",
        title: "1984",
        author: "George Orwell",
        category: "Fiction",
        isbn: "978-0451524935",
        year: 1949,
        totalCopies: 5,
        availableCopies: 3,
        shelf: "FIC-302",
        status: "Available",
        description: "A startlingly prophetic dystopian novel examining totalitarianism, government surveillance, censorship, and psychological manipulation.",
        image: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
        bgGradient: "linear-gradient(135deg, #881337 0%, #e11d48 100%)",
        icon: "fa-eye"
    },
    {
        id: "BOOK-009",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "Literature",
        isbn: "978-0743273565",
        year: 1925,
        totalCopies: 3,
        availableCopies: 3,
        shelf: "LIT-303",
        status: "Available",
        description: "A portrait of the Jazz Age recounting the tragic romantic obsession of Jay Gatsby and the critique of the American Dream.",
        image: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
        bgGradient: "linear-gradient(135deg, #14532d 0%, #22c55e 100%)",
        icon: "fa-champagne-glasses"
    },
    {
        id: "BOOK-010",
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        category: "Science",
        isbn: "978-0553380163",
        year: 1988,
        totalCopies: 4,
        availableCopies: 4,
        shelf: "SCI-401",
        status: "Available",
        description: "From the Big Bang to black holes, Stephen Hawking's landmark work explains cosmology, quantum mechanics, and time in accessible terms.",
        image: "https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg",
        bgGradient: "linear-gradient(135deg, #0c4a6e 0%, #0284c7 100%)",
        icon: "fa-atom"
    },
    {
        id: "BOOK-011",
        title: "Cosmos",
        author: "Carl Sagan",
        category: "Science",
        isbn: "978-0345539434",
        year: 1980,
        totalCopies: 3,
        availableCopies: 2,
        shelf: "SCI-402",
        status: "Available",
        description: "A mesmerizing journey through 15 billion years of cosmic evolution and science, tracking the human quest to comprehend the universe.",
        image: "https://covers.openlibrary.org/b/isbn/9780345539434-L.jpg",
        bgGradient: "linear-gradient(135deg, #312e81 0%, #6366f1 100%)",
        icon: "fa-satellite"
    },
    {
        id: "BOOK-012",
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        category: "History",
        isbn: "978-0062316097",
        year: 2014,
        totalCopies: 5,
        availableCopies: 4,
        shelf: "HIS-501",
        status: "Available",
        description: "Explores how Homo sapiens conquered Earth through cognitive, agricultural, and scientific revolutions, transforming our species and global ecosystem.",
        image: "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg",
        bgGradient: "linear-gradient(135deg, #713f12 0%, #ca8a04 100%)",
        icon: "fa-earth-americas"
    },
    {
        id: "BOOK-013",
        title: "Guns, Germs, and Steel",
        author: "Jared Diamond",
        category: "History",
        isbn: "978-0393317558",
        year: 1997,
        totalCopies: 3,
        availableCopies: 3,
        shelf: "HIS-502",
        status: "Available",
        description: "Examines why Eurasian civilizations survived and conquered others, refuting racist theories in favor of environmental and geographic factors.",
        image: "https://covers.openlibrary.org/b/isbn/9780393317558-L.jpg",
        bgGradient: "linear-gradient(135deg, #451a03 0%, #b45309 100%)",
        icon: "fa-landmark"
    },
    {
        id: "BOOK-014",
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        category: "Psychology",
        isbn: "978-0374533557",
        year: 2011,
        totalCopies: 4,
        availableCopies: 4,
        shelf: "PSY-601",
        status: "Available",
        description: "Nobel laureate Daniel Kahneman explains the two systems that drive the way we think: intuitive/fast System 1 and deliberative/slow System 2.",
        image: "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg",
        bgGradient: "linear-gradient(135deg, #064e3b 0%, #059669 100%)",
        icon: "fa-lightbulb"
    },
    {
        id: "BOOK-015",
        title: "Zero to One: Notes on Startups",
        author: "Peter Thiel, Blake Masters",
        category: "Business",
        isbn: "978-0804139298",
        year: 2014,
        totalCopies: 4,
        availableCopies: 3,
        shelf: "BIZ-701",
        status: "Available",
        description: "How to build companies that create new things and go from 0 to 1, focusing on monopolies, contrarian thinking, and breakthrough innovation.",
        image: "https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg",
        bgGradient: "linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)",
        icon: "fa-chart-line"
    },
    {
        id: "BOOK-016",
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self Development",
        isbn: "978-0735211292",
        year: 2018,
        totalCopies: 6,
        availableCopies: 5,
        shelf: "SD-801",
        status: "Available",
        description: "A proven framework for improving every day through tiny changes, compounding small habits into remarkable life-changing results.",
        image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
        bgGradient: "linear-gradient(135deg, #134e4a 0%, #0d9488 100%)",
        icon: "fa-bullseye"
    }
];

const DEFAULT_MEMBERS = [
    { id: "LIB-101", name: "Ananya Sharma", email: "ananya@example.com", phone: "9876543210", status: "Active", borrowedCount: 1 },
    { id: "LIB-102", name: "Rahul Kumar", email: "rahul@example.com", phone: "9876543211", status: "Active", borrowedCount: 1 },
    { id: "LIB-103", name: "Priya Verma", email: "priya@example.com", phone: "9876543212", status: "Active", borrowedCount: 1 },
    { id: "LIB-104", name: "David Miller", email: "david@example.com", phone: "9876543213", status: "Active", borrowedCount: 1 }
];

const DEFAULT_LOANS = [
    {
        id: "LOAN-101",
        memberId: "LIB-101",
        memberName: "Ananya Sharma",
        bookId: "BOOK-001",
        bookTitle: "Clean Code",
        issueDate: "2026-09-08",
        dueDate: "2026-09-22",
        returnDate: null,
        status: "Issued"
    },
    {
        id: "LOAN-102",
        memberId: "LIB-102",
        memberName: "Rahul Kumar",
        bookId: "BOOK-002",
        bookTitle: "The Pragmatic Programmer",
        issueDate: "2026-09-10",
        dueDate: "2026-09-24",
        returnDate: null,
        status: "Issued"
    },
    {
        id: "LOAN-103",
        memberId: "LIB-103",
        memberName: "Priya Verma",
        bookId: "BOOK-003",
        bookTitle: "Introduction to Algorithms",
        issueDate: "2026-08-20",
        dueDate: "2026-09-03",
        returnDate: null,
        status: "Overdue"
    },
    {
        id: "LOAN-104",
        memberId: "LIB-104",
        memberName: "David Miller",
        bookId: "BOOK-004",
        bookTitle: "Design Patterns",
        issueDate: "2026-09-12",
        dueDate: "2026-09-26",
        returnDate: null,
        status: "Issued"
    }
];

// Current viewed book ID for Quick Action
let currentViewingBookId = null;
let currentBooksViewMode = "table";


// =========================================================
// 2. STORAGE MANAGERS
// =========================================================

function getBooks() {
    let saved = localStorage.getItem("libraryBooks");
    if (!saved) {
        localStorage.setItem("libraryBooks", JSON.stringify(DEFAULT_BOOKS));
        return DEFAULT_BOOKS;
    }
    try {
        let parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
            // Auto-enrich default books with cover image if missing in existing localStorage
            let updated = false;
            parsed.forEach(function (book) {
                if (!book.image) {
                    let defaultMatch = DEFAULT_BOOKS.find(function (db) { return db.id === book.id || db.isbn === book.isbn; });
                    if (defaultMatch && defaultMatch.image) {
                        book.image = defaultMatch.image;
                        updated = true;
                    }
                }
            });
            if (updated) {
                localStorage.setItem("libraryBooks", JSON.stringify(parsed));
            }
            return parsed;
        }
        localStorage.setItem("libraryBooks", JSON.stringify(DEFAULT_BOOKS));
        return DEFAULT_BOOKS;
    } catch (e) {
        console.error("Error parsing books:", e);
        return DEFAULT_BOOKS;
    }
}

function saveBooks(books) {
    localStorage.setItem("libraryBooks", JSON.stringify(books));
}

function getMembers() {
    let saved = localStorage.getItem("libraryMembers");
    if (!saved) {
        localStorage.setItem("libraryMembers", JSON.stringify(DEFAULT_MEMBERS));
        return DEFAULT_MEMBERS;
    }
    try {
        let parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        return DEFAULT_MEMBERS;
    } catch (e) {
        return DEFAULT_MEMBERS;
    }
}

function saveMembers(members) {
    localStorage.setItem("libraryMembers", JSON.stringify(members));
}

function getLoans() {
    let saved = localStorage.getItem("libraryLoans");
    if (!saved) {
        localStorage.setItem("libraryLoans", JSON.stringify(DEFAULT_LOANS));
        return DEFAULT_LOANS;
    }
    try {
        let parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        return DEFAULT_LOANS;
    } catch (e) {
        return DEFAULT_LOANS;
    }
}

function saveLoans(loans) {
    localStorage.setItem("libraryLoans", JSON.stringify(loans));
}


// =========================================================
// 3. CATEGORY BADGE HELPER & COVER FALLBACKS
// =========================================================

function getCategoryBadgeClass(category) {
    if (!category) return "badge-default";
    let cat = category.toLowerCase();
    if (cat.includes("computer") || cat.includes("code")) return "badge-cs";
    if (cat.includes("software") || cat.includes("dev")) return "badge-software";
    if (cat.includes("ai") || cat.includes("data")) return "badge-ai";
    if (cat.includes("fiction")) return "badge-fiction";
    if (cat.includes("literature")) return "badge-fiction";
    if (cat.includes("science")) return "badge-science";
    if (cat.includes("history")) return "badge-history";
    if (cat.includes("psychology")) return "badge-psychology";
    if (cat.includes("business")) return "badge-business";
    if (cat.includes("self")) return "badge-self";
    return "badge-default";
}

// Fallback handlers for broken or missing book cover images
function handleThumbError(imgEl, gradient, icon) {
    if (!imgEl) return;
    let parent = imgEl.parentElement;
    if (parent) {
        parent.innerHTML = `
            <div class="book-table-thumb-placeholder" style="background: ${gradient || 'linear-gradient(135deg, #1e293b, #3b82f6)'};">
                <i class="fa-solid ${icon || 'fa-book'}"></i>
            </div>
        `;
    }
}

function handleCoverError(imgEl, gradient, icon) {
    if (!imgEl) return;
    let parent = imgEl.parentElement;
    if (parent) {
        imgEl.style.display = "none";
        let existingFallback = parent.querySelector(".book-card-placeholder-fallback");
        if (!existingFallback) {
            let fallbackDiv = document.createElement("div");
            fallbackDiv.className = "book-card-placeholder-fallback";
            fallbackDiv.innerHTML = `<i class="fa-solid ${icon || 'fa-book'} book-icon"></i>`;
            parent.appendChild(fallbackDiv);
        }
    }
}

function handleDetailCoverError() {
    let img = document.getElementById("viewDetailCoverImg");
    let placeholder = document.getElementById("viewDetailCoverPlaceholder");
    if (img) img.style.display = "none";
    if (placeholder) placeholder.style.display = "flex";
}


// =========================================================
// 4. BOOK RENDERING (TABLE & GRID)
// =========================================================

function renderBooks(filteredList) {
    let books = filteredList !== undefined ? filteredList : getBooks();
    let tableBody = document.getElementById("booksTableBody");
    let gridContainer = document.getElementById("booksGridView");
    let emptyState = document.getElementById("booksEmptyState");
    let tableView = document.getElementById("booksTableView");

    if (!tableBody || !gridContainer) return;

    // Check empty state
    if (books.length === 0) {
        tableBody.innerHTML = "";
        gridContainer.innerHTML = "";
        if (emptyState) emptyState.style.display = "block";
        if (tableView) tableView.style.display = "none";
        gridContainer.style.display = "none";
        updateMetricCounters();
        return;
    }

    if (emptyState) emptyState.style.display = "none";
    if (currentBooksViewMode === "table") {
        if (tableView) tableView.style.display = "block";
        gridContainer.style.display = "none";
    } else {
        if (tableView) tableView.style.display = "none";
        gridContainer.style.display = "grid";
    }

    // 1. Render Table View
    let tableHTML = "";
    books.forEach(function (book, index) {
        let isAvailable = (book.availableCopies > 0);
        let statusBadge = isAvailable
            ? `<span class="badge bg-success"><i class="fa-solid fa-circle-check"></i> Available</span>`
            : `<span class="badge bg-danger"><i class="fa-solid fa-circle-xmark"></i> Out of Stock</span>`;

        let catClass = getCategoryBadgeClass(book.category);
        let bgGradient = book.bgGradient || "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)";
        let iconClass = book.icon || "fa-book";

        tableHTML += `
            <tr>
                <td class="text-muted fw-bold text-center">${index + 1}</td>
                <td class="text-center" style="width: 70px;">
                    <div class="book-table-thumb-wrapper">
                        ${book.image ? `
                            <img src="${escapeHtml(book.image)}" alt="${escapeHtml(book.title)}" class="book-table-thumb" loading="lazy" onerror="handleThumbError(this, '${escapeHtml(bgGradient)}', '${escapeHtml(iconClass)}')" />
                        ` : `
                            <div class="book-table-thumb-placeholder" style="background: ${bgGradient};">
                                <i class="fa-solid ${iconClass}"></i>
                            </div>
                        `}
                    </div>
                </td>
                <td>
                    <div class="book-title-cell">${escapeHtml(book.title)}</div>
                    <div class="book-isbn-cell"><i class="fa-solid fa-barcode text-muted"></i> ${escapeHtml(book.isbn || "N/A")} | ${book.year || ""}</div>
                </td>
                <td>${escapeHtml(book.author)}</td>
                <td><span class="badge-category ${catClass}">${escapeHtml(book.category)}</span></td>
                <td>
                    <span class="fw-bold ${isAvailable ? 'text-success' : 'text-danger'}">${book.availableCopies}</span> 
                    <span class="text-muted">/ ${book.totalCopies}</span>
                </td>
                <td><span class="badge bg-light text-dark border">${escapeHtml(book.shelf || "Main")}</span></td>
                <td>${statusBadge}</td>
                <td class="text-center">
                    <div class="btn-group btn-group-sm" role="group">
                        <button class="btn btn-outline-info" title="View Details" onclick="viewBookDetails('${book.id}')">
                            <i class="fa-solid fa-eye"></i>
                        </button>
                        <button class="btn btn-outline-warning" title="Edit Book" onclick="openEditBookModal('${book.id}')">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button class="btn btn-outline-danger" title="Delete Book" onclick="deleteBook('${book.id}')">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
    tableBody.innerHTML = tableHTML;

    // 2. Render Grid View
    let gridHTML = "";
    books.forEach(function (book) {
        let isAvailable = (book.availableCopies > 0);
        let bgGradient = book.bgGradient || "linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)";
        let iconClass = book.icon || "fa-book";
        let catClass = getCategoryBadgeClass(book.category);

        gridHTML += `
            <div class="book-grid-card">
                <div class="book-card-header" style="background: ${bgGradient};">
                    ${book.image ? `
                        <img src="${escapeHtml(book.image)}" alt="${escapeHtml(book.title)}" class="book-card-cover-img" loading="lazy" onerror="handleCoverError(this, '${escapeHtml(bgGradient)}', '${escapeHtml(iconClass)}')" />
                    ` : `
                        <div class="book-card-placeholder-fallback">
                            <i class="fa-solid ${iconClass} book-icon"></i>
                        </div>
                    `}
                    <span class="badge ${isAvailable ? 'bg-success' : 'bg-danger'} book-status-pill">
                        ${isAvailable ? 'Available' : 'Issued Out'}
                    </span>
                </div>
                <div class="book-card-body">
                    <div class="d-flex justify-content-between align-items-start mb-1">
                        <span class="badge-category ${catClass}">${escapeHtml(book.category)}</span>
                        <small class="text-muted"><i class="fa-solid fa-location-dot"></i> ${escapeHtml(book.shelf || "CS")}</small>
                    </div>
                    <h5 class="book-card-title mt-2" title="${escapeHtml(book.title)}">${escapeHtml(book.title)}</h5>
                    <p class="book-card-author">by ${escapeHtml(book.author)}</p>

                    <div class="book-meta-list mt-auto">
                        <div class="book-meta-item">
                            <span>ISBN:</span>
                            <strong class="text-dark">${escapeHtml(book.isbn || "N/A")}</strong>
                        </div>
                        <div class="book-meta-item">
                            <span>Copies:</span>
                            <strong class="${isAvailable ? 'text-success' : 'text-danger'}">${book.availableCopies} available (${book.totalCopies} total)</strong>
                        </div>
                    </div>
                </div>
                <div class="book-card-footer">
                    <button class="btn btn-sm btn-outline-secondary" onclick="viewBookDetails('${book.id}')">
                        <i class="fa-solid fa-info-circle"></i> Details
                    </button>
                    <div class="d-flex gap-1">
                        <button class="btn btn-sm btn-outline-warning" onclick="openEditBookModal('${book.id}')" title="Edit">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-danger" onclick="deleteBook('${book.id}')" title="Delete">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    gridContainer.innerHTML = gridHTML;

    updateMetricCounters();
}


// =========================================================
// 5. METRIC COUNTERS & STATS
// =========================================================

function updateMetricCounters() {
    let books = getBooks();
    let totalTitles = books.length;
    let totalCopies = 0;
    let totalAvailable = 0;
    let totalIssued = 0;

    books.forEach(function (b) {
        let total = parseInt(b.totalCopies) || 0;
        let avail = parseInt(b.availableCopies) || 0;
        totalCopies += total;
        totalAvailable += avail;
        totalIssued += Math.max(0, total - avail);
    });

    let elTotal = document.getElementById("metricTotalBooks");
    let elCopies = document.getElementById("metricTotalCopies");
    let elAvail = document.getElementById("metricAvailableBooks");
    let elIssued = document.getElementById("metricIssuedBooks");

    if (elTotal) elTotal.textContent = totalTitles;
    if (elCopies) elCopies.textContent = totalCopies;
    if (elAvail) elAvail.textContent = totalAvailable;
    if (elIssued) elIssued.textContent = totalIssued;

    // Sync with Dashboard Cards
    let dashTotal = document.getElementById("dashTotalBooks");
    let dashSubtitle = document.getElementById("dashTotalCopiesSubtitle");
    let dashIssued = document.getElementById("dashIssuedBooks");

    if (dashTotal) dashTotal.textContent = totalTitles;
    if (dashSubtitle) dashSubtitle.innerHTML = `<i class="fa-solid fa-layer-group"></i> ${totalCopies} total copies`;
    if (dashIssued) dashIssued.textContent = totalIssued;

    // Sync with Reports
    let repTotal = document.getElementById("reportTotalBooks");
    let repCopies = document.getElementById("reportTotalCopies");
    let repLoans = document.getElementById("reportActiveLoans");
    let repAvail = document.getElementById("reportAvailableCopies");

    if (repTotal) repTotal.textContent = totalTitles;
    if (repCopies) repCopies.textContent = totalCopies;
    if (repLoans) repLoans.textContent = totalIssued;
    if (repAvail) repAvail.textContent = totalAvailable;
}


// =========================================================
// 6. FILTERING & SEARCH
// =========================================================

function filterBooks() {
    let searchInput = document.getElementById("simpleBookSearch");
    let catSelect = document.getElementById("bookCategoryFilter");
    let statusSelect = document.getElementById("bookStatusFilter");

    let query = searchInput ? searchInput.value.trim().toLowerCase() : "";
    let selectedCat = catSelect ? catSelect.value : "ALL";
    let selectedStatus = statusSelect ? statusSelect.value : "ALL";

    let books = getBooks();

    let filtered = books.filter(function (book) {
        // 1. Text search (Title, Author, ISBN)
        let matchesQuery = true;
        if (query !== "") {
            let title = (book.title || "").toLowerCase();
            let author = (book.author || "").toLowerCase();
            let isbn = (book.isbn || "").toLowerCase();
            matchesQuery = title.includes(query) || author.includes(query) || isbn.includes(query);
        }

        // 2. Category filter
        let matchesCategory = true;
        if (selectedCat !== "ALL") {
            matchesCategory = (book.category === selectedCat);
        }

        // 3. Status filter
        let matchesStatus = true;
        if (selectedStatus === "Available") {
            matchesStatus = (book.availableCopies > 0);
        } else if (selectedStatus === "Issued") {
            matchesStatus = (book.availableCopies < book.totalCopies);
        }

        return matchesQuery && matchesCategory && matchesStatus;
    });

    renderBooks(filtered);
}

function resetBookFilters() {
    let searchInput = document.getElementById("simpleBookSearch");
    let catSelect = document.getElementById("bookCategoryFilter");
    let statusSelect = document.getElementById("bookStatusFilter");

    if (searchInput) searchInput.value = "";
    if (catSelect) catSelect.value = "ALL";
    if (statusSelect) statusSelect.value = "ALL";

    renderBooks(getBooks());
}

function toggleBooksView(mode) {
    currentBooksViewMode = mode;
    let btnTable = document.getElementById("btnTableView");
    let btnGrid = document.getElementById("btnGridView");
    let tableView = document.getElementById("booksTableView");
    let gridView = document.getElementById("booksGridView");

    if (mode === "table") {
        if (btnTable) btnTable.classList.add("active");
        if (btnGrid) btnGrid.classList.remove("active");
        if (tableView) tableView.style.display = "block";
        if (gridView) gridView.style.display = "none";
    } else {
        if (btnTable) btnTable.classList.remove("active");
        if (btnGrid) btnGrid.classList.add("active");
        if (tableView) tableView.style.display = "none";
        if (gridView) gridView.style.display = "grid";
    }
}


// =========================================================
// 7. IMAGE INPUT & PREVIEW HELPERS
// =========================================================

function previewCoverImage(inputId, previewImgId, placeholderId) {
    let input = document.getElementById(inputId);
    let previewImg = document.getElementById(previewImgId);
    let placeholder = document.getElementById(placeholderId);

    if (!input || !previewImg) return;

    let url = input.value.trim();
    if (url) {
        previewImg.src = url;
        previewImg.style.display = "block";
        if (placeholder) placeholder.style.display = "none";

        previewImg.onerror = function () {
            previewImg.style.display = "none";
            if (placeholder) {
                placeholder.style.display = "flex";
                placeholder.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-warning fs-4"></i><small class="text-muted d-block mt-1" style="font-size: 10px;">Invalid URL</small>`;
            }
        };
        previewImg.onload = function () {
            previewImg.style.display = "block";
            if (placeholder) placeholder.style.display = "none";
        };
    } else {
        previewImg.style.display = "none";
        previewImg.src = "";
        if (placeholder) {
            placeholder.style.display = "flex";
            placeholder.innerHTML = `<i class="fa-solid fa-image text-muted fs-3"></i><small class="text-muted d-block mt-1" style="font-size: 11px;">Preview</small>`;
        }
    }
}

function handleImageFileUpload(event, targetUrlInputId, previewImgId, placeholderId) {
    let file = event.target.files && event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file (PNG, JPG, WEBP, etc.).");
        return;
    }

    // Limit to 2MB for localStorage capacity
    if (file.size > 2 * 1024 * 1024) {
        alert("Image size is too large (over 2MB). Please select a smaller image or use an image URL.");
        return;
    }

    let reader = new FileReader();
    reader.onload = function (e) {
        let base64String = e.target.result;
        let urlInput = document.getElementById(targetUrlInputId);
        if (urlInput) {
            urlInput.value = base64String;
            previewCoverImage(targetUrlInputId, previewImgId, placeholderId);
        }
    };
    reader.readAsDataURL(file);
}

function fetchCoverFromIsbn(isbnInputId, targetUrlInputId, previewImgId, placeholderId) {
    let isbnElem = document.getElementById(isbnInputId);
    let urlInput = document.getElementById(targetUrlInputId);

    if (!isbnElem || !urlInput) return;

    let rawIsbn = isbnElem.value.trim();
    let cleanIsbn = rawIsbn.replace(/[^0-9X]/gi, "");

    if (!cleanIsbn || (cleanIsbn.length !== 10 && cleanIsbn.length !== 13)) {
        alert("Please enter a valid 10 or 13-digit ISBN first (e.g., 978-0132350884).");
        return;
    }

    let coverUrl = `https://covers.openlibrary.org/b/isbn/${cleanIsbn}-L.jpg`;
    urlInput.value = coverUrl;
    previewCoverImage(targetUrlInputId, previewImgId, placeholderId);
}


// =========================================================
// 8. CRUD: ADD, EDIT, DELETE, VIEW BOOK
// =========================================================

// Save New Book
function saveNewBook(event) {
    if (event) event.preventDefault();

    let titleElem = document.getElementById("addBookTitle");
    let authorElem = document.getElementById("addBookAuthor");
    let categoryElem = document.getElementById("addBookCategory");
    let isbnElem = document.getElementById("addBookISBN");
    let yearElem = document.getElementById("addBookYear");
    let copiesElem = document.getElementById("addBookCopies");
    let shelfElem = document.getElementById("addBookShelf");
    let descElem = document.getElementById("addBookDesc");
    let imageElem = document.getElementById("addBookImage");

    if (!titleElem || !authorElem || !categoryElem) return;

    let title = titleElem.value.trim();
    let author = authorElem.value.trim();
    let category = categoryElem.value;
    let isbn = isbnElem ? isbnElem.value.trim() : "N/A";
    let year = yearElem ? parseInt(yearElem.value) || new Date().getFullYear() : new Date().getFullYear();
    let totalCopies = copiesElem ? Math.max(1, parseInt(copiesElem.value) || 1) : 1;
    let shelf = shelfElem && shelfElem.value.trim() !== "" ? shelfElem.value.trim() : "Main Shelf";
    let desc = descElem ? descElem.value.trim() : "";
    let image = imageElem ? imageElem.value.trim() : "";

    if (!title || !author) {
        alert("Please enter both Book Title and Author.");
        return;
    }

    // Dynamic gradient & icon based on category
    let gradients = [
        "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
        "linear-gradient(135deg, #065f46 0%, #10b981 100%)",
        "linear-gradient(135deg, #701a75 0%, #c026d3 100%)",
        "linear-gradient(135deg, #881337 0%, #e11d48 100%)",
        "linear-gradient(135deg, #78350f 0%, #d97706 100%)",
        "linear-gradient(135deg, #0c4a6e 0%, #0284c7 100%)"
    ];
    let randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

    let newBook = {
        id: "BOOK-" + String(Date.now()).slice(-4),
        title: title,
        author: author,
        category: category,
        isbn: isbn,
        year: year,
        totalCopies: totalCopies,
        availableCopies: totalCopies,
        shelf: shelf,
        status: "Available",
        description: desc || `A valuable addition to our library collection covering ${category}.`,
        image: image,
        bgGradient: randomGradient,
        icon: "fa-book"
    };

    let books = getBooks();
    books.unshift(newBook); // Add to beginning
    saveBooks(books);

    // Refresh UI
    renderBooks();
    populateIssueBookDropdown();
    updateDashboardStats();

    // Close Modal
    closeBootstrapModal("addBookModal");

    // Reset Form
    let form = document.getElementById("addBookForm");
    if (form) form.reset();
    previewCoverImage("addBookImage", "addBookImagePreview", "addBookImagePlaceholder");

    alert(`Success! Book "${title}" has been added to the library catalog.`);
}

// Open Edit Book Modal
function openEditBookModal(bookId) {
    let books = getBooks();
    let book = books.find(function (b) { return b.id === bookId; });
    if (!book) return;

    let idElem = document.getElementById("editBookId");
    let titleElem = document.getElementById("editBookTitle");
    let authorElem = document.getElementById("editBookAuthor");
    let categoryElem = document.getElementById("editBookCategory");
    let isbnElem = document.getElementById("editBookISBN");
    let yearElem = document.getElementById("editBookYear");
    let copiesElem = document.getElementById("editBookCopies");
    let shelfElem = document.getElementById("editBookShelf");
    let descElem = document.getElementById("editBookDesc");
    let imageElem = document.getElementById("editBookImage");

    if (idElem) idElem.value = book.id;
    if (titleElem) titleElem.value = book.title;
    if (authorElem) authorElem.value = book.author;
    if (categoryElem) categoryElem.value = book.category;
    if (isbnElem) isbnElem.value = book.isbn || "";
    if (yearElem) yearElem.value = book.year || "";
    if (copiesElem) copiesElem.value = book.totalCopies || 1;
    if (shelfElem) shelfElem.value = book.shelf || "";
    if (descElem) descElem.value = book.description || "";
    if (imageElem) imageElem.value = book.image || "";

    previewCoverImage("editBookImage", "editBookImagePreview", "editBookImagePlaceholder");

    openBootstrapModal("editBookModal");
}

// Update Book
function updateBook(event) {
    if (event) event.preventDefault();

    let idElem = document.getElementById("editBookId");
    let titleElem = document.getElementById("editBookTitle");
    let authorElem = document.getElementById("editBookAuthor");
    let categoryElem = document.getElementById("editBookCategory");
    let isbnElem = document.getElementById("editBookISBN");
    let yearElem = document.getElementById("editBookYear");
    let copiesElem = document.getElementById("editBookCopies");
    let shelfElem = document.getElementById("editBookShelf");
    let descElem = document.getElementById("editBookDesc");
    let imageElem = document.getElementById("editBookImage");

    if (!idElem) return;
    let bookId = idElem.value;

    let books = getBooks();
    let index = books.findIndex(function (b) { return b.id === bookId; });
    if (index === -1) return;

    let oldTotal = books[index].totalCopies || 1;
    let oldAvail = books[index].availableCopies || 0;
    let newTotal = copiesElem ? Math.max(1, parseInt(copiesElem.value) || 1) : oldTotal;

    // Adjust available copies based on change in total copies
    let copyDifference = newTotal - oldTotal;
    let newAvail = Math.max(0, oldAvail + copyDifference);

    books[index].title = titleElem ? titleElem.value.trim() : books[index].title;
    books[index].author = authorElem ? authorElem.value.trim() : books[index].author;
    books[index].category = categoryElem ? categoryElem.value : books[index].category;
    books[index].isbn = isbnElem ? isbnElem.value.trim() : books[index].isbn;
    books[index].year = yearElem ? parseInt(yearElem.value) || books[index].year : books[index].year;
    books[index].totalCopies = newTotal;
    books[index].availableCopies = newAvail;
    books[index].shelf = shelfElem ? shelfElem.value.trim() : books[index].shelf;
    books[index].description = descElem ? descElem.value.trim() : books[index].description;
    books[index].image = imageElem ? imageElem.value.trim() : books[index].image;
    books[index].status = newAvail > 0 ? "Available" : "Out of Stock";

    saveBooks(books);
    renderBooks();
    populateIssueBookDropdown();
    updateDashboardStats();

    closeBootstrapModal("editBookModal");
    alert("Book details updated successfully!");
}

// Delete Book
function deleteBook(bookId) {
    let books = getBooks();
    let book = books.find(function (b) { return b.id === bookId; });
    if (!book) return;

    let confirmDelete = confirm(`Are you sure you want to delete "${book.title}" from the library catalog?`);
    if (!confirmDelete) return;

    let updatedBooks = books.filter(function (b) { return b.id !== bookId; });
    saveBooks(updatedBooks);

    renderBooks();
    populateIssueBookDropdown();
    updateDashboardStats();
    alert(`Book "${book.title}" has been deleted.`);
}

// View Book Details Modal
function viewBookDetails(bookId) {
    let books = getBooks();
    let book = books.find(function (b) { return b.id === bookId; });
    if (!book) return;

    currentViewingBookId = book.id;

    let titleElem = document.getElementById("viewDetailTitle");
    let authorElem = document.getElementById("viewDetailAuthor");
    let catElem = document.getElementById("viewDetailCategory");
    let isbnElem = document.getElementById("viewDetailISBN");
    let yearElem = document.getElementById("viewDetailYear");
    let shelfElem = document.getElementById("viewDetailShelf");
    let availElem = document.getElementById("viewDetailAvailability");
    let descElem = document.getElementById("viewDetailDesc");
    let issueBtn = document.getElementById("viewDetailIssueBtn");

    let coverImg = document.getElementById("viewDetailCoverImg");
    let coverPlaceholder = document.getElementById("viewDetailCoverPlaceholder");

    if (titleElem) titleElem.textContent = book.title;
    if (authorElem) authorElem.textContent = book.author;
    if (catElem) catElem.textContent = book.category;
    if (isbnElem) isbnElem.textContent = book.isbn || "N/A";
    if (yearElem) yearElem.textContent = book.year || "N/A";
    if (shelfElem) shelfElem.textContent = book.shelf || "Main Shelf";
    if (availElem) {
        let isAvail = (book.availableCopies > 0);
        availElem.textContent = `${book.availableCopies} / ${book.totalCopies} Available`;
        availElem.className = isAvail ? "fw-bold text-success" : "fw-bold text-danger";
    }
    if (descElem) descElem.textContent = book.description || "No description provided for this book.";

    // Render cover image in details modal
    if (coverImg && coverPlaceholder) {
        if (book.image) {
            coverImg.src = book.image;
            coverImg.style.display = "block";
            coverPlaceholder.style.display = "none";
        } else {
            coverImg.style.display = "none";
            coverImg.src = "";
            coverPlaceholder.style.display = "flex";
            coverPlaceholder.innerHTML = `<i class="fa-solid ${book.icon || 'fa-book-open'}"></i>`;
        }
    }

    if (issueBtn) {
        if (book.availableCopies <= 0) {
            issueBtn.disabled = true;
            issueBtn.innerHTML = `<i class="fa-solid fa-ban"></i> Out of Stock`;
        } else {
            issueBtn.disabled = false;
            issueBtn.innerHTML = `<i class="fa-solid fa-hand-holding-hand"></i> Issue This Book`;
        }
    }

    openBootstrapModal("viewBookModal");
}

function issueCurrentViewedBook() {
    if (!currentViewingBookId) return;
    closeBootstrapModal("viewBookModal");
    showSection("issueSection");

    let select = document.getElementById("issueBookSelect");
    if (select) {
        select.value = currentViewingBookId;
    }
}


// =========================================================
// 8. ISSUE BOOK & RETURN BOOK CIRCULATION
// =========================================================

// Populate dropdowns for issue and return
function populateIssueBookDropdown() {
    let select = document.getElementById("issueBookSelect");
    if (!select) return;

    let books = getBooks();
    let options = `<option value="">-- Choose Available Book --</option>`;

    books.forEach(function (book) {
        if (book.availableCopies > 0) {
            options += `<option value="${book.id}">${escapeHtml(book.title)} (Avail: ${book.availableCopies}/${book.totalCopies}) - [${book.isbn}]</option>`;
        }
    });

    select.innerHTML = options;

    // Member select
    let memberSelect = document.getElementById("issueMemberSelect");
    if (memberSelect) {
        let members = getMembers();
        let mOptions = `<option value="">-- Choose Registered Member --</option>`;
        members.forEach(function (m) {
            mOptions += `<option value="${m.id}">${escapeHtml(m.name)} (${m.id}) - ${m.email}</option>`;
        });
        memberSelect.innerHTML = mOptions;
    }
}

function populateReturnBookDropdown() {
    let select = document.getElementById("returnLoanSelect");
    if (!select) return;

    let loans = getLoans();
    let activeLoans = loans.filter(function (l) { return !l.returnDate; });

    let options = `<option value="">-- Select Active Loan --</option>`;
    activeLoans.forEach(function (loan) {
        let isOverdue = new Date(loan.dueDate) < new Date();
        options += `<option value="${loan.id}" data-due="${loan.dueDate}" data-book="${loan.bookId}">
            ${escapeHtml(loan.bookTitle)} (Borrowed by: ${escapeHtml(loan.memberName)}) - Due: ${loan.dueDate} ${isOverdue ? '⚠️ OVERDUE' : ''}
        </option>`;
    });

    select.innerHTML = options;
}

// Handle Issue Book Submission
function handleIssueBook(event) {
    if (event) event.preventDefault();

    let memberSelect = document.getElementById("issueMemberSelect");
    let bookSelect = document.getElementById("issueBookSelect");
    let issueDateElem = document.getElementById("simpleIssueDate");
    let dueDateElem = document.getElementById("simpleDueDate");

    if (!memberSelect || !bookSelect) return;

    let memberId = memberSelect.value;
    let bookId = bookSelect.value;
    let issueDate = issueDateElem ? issueDateElem.value : new Date().toISOString().split("T")[0];
    let dueDate = dueDateElem ? dueDateElem.value : "";

    if (!memberId || !bookId) {
        alert("Please select both a Member and an Available Book.");
        return;
    }

    let books = getBooks();
    let book = books.find(function (b) { return b.id === bookId; });
    if (!book || book.availableCopies <= 0) {
        alert("Sorry, this book is currently out of stock!");
        return;
    }

    let members = getMembers();
    let member = members.find(function (m) { return m.id === memberId; });
    let memberName = member ? member.name : "Member";

    // Decrement available copies
    book.availableCopies -= 1;
    if (book.availableCopies === 0) {
        book.status = "Out of Stock";
    }
    saveBooks(books);

    // Create loan record
    let loans = getLoans();
    let newLoan = {
        id: "LOAN-" + String(Date.now()).slice(-4),
        memberId: memberId,
        memberName: memberName,
        bookId: book.id,
        bookTitle: book.title,
        issueDate: issueDate,
        dueDate: dueDate,
        returnDate: null,
        status: "Issued"
    };
    loans.unshift(newLoan);
    saveLoans(loans);

    // Update UI
    renderBooks();
    populateIssueBookDropdown();
    populateReturnBookDropdown();
    updateDashboardStats();

    alert(`Success! "${book.title}" has been issued to ${memberName}. Due date: ${dueDate}`);

    let form = document.getElementById("issueBookForm");
    if (form) form.reset();

    // Reset default dates
    setDefaultDates();
    showSection("dashboardSection");
}

// Handle Return Book Selection & Fine
function handleReturnSelectChange() {
    calculateReturnFine();
}

function calculateReturnFine() {
    let select = document.getElementById("returnLoanSelect");
    let returnDateElem = document.getElementById("simpleReturnDate");
    let fineDisplay = document.getElementById("returnFineDisplay");

    if (!select || !returnDateElem || !fineDisplay) return;

    let selectedOption = select.options[select.selectedIndex];
    if (!selectedOption || !selectedOption.dataset.due) {
        fineDisplay.value = "₹ 0.00";
        return;
    }

    let dueDate = new Date(selectedOption.dataset.due);
    let returnDate = new Date(returnDateElem.value);

    let diffTime = returnDate - dueDate;
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 0) {
        let fine = diffDays * 5; // 5 rupees per overdue day
        fineDisplay.value = `₹ ${fine}.00 (${diffDays} days overdue)`;
    } else {
        fineDisplay.value = "₹ 0.00 (No Overdue Fine)";
    }
}

// Handle Return Book Submission
function handleReturnBook(event) {
    if (event) event.preventDefault();

    let select = document.getElementById("returnLoanSelect");
    let returnDateElem = document.getElementById("simpleReturnDate");

    if (!select) return;
    let loanId = select.value;
    let returnDate = returnDateElem ? returnDateElem.value : new Date().toISOString().split("T")[0];

    if (!loanId) {
        alert("Please select an active issued book record to return.");
        return;
    }

    let loans = getLoans();
    let loan = loans.find(function (l) { return l.id === loanId; });
    if (!loan) return;

    loan.returnDate = returnDate;
    loan.status = "Returned";
    saveLoans(loans);

    // Increment book available copies
    let books = getBooks();
    let book = books.find(function (b) { return b.id === loan.bookId; });
    if (book) {
        book.availableCopies = Math.min(book.totalCopies, (book.availableCopies || 0) + 1);
        book.status = "Available";
        saveBooks(books);
    }

    // Refresh UI
    renderBooks();
    populateIssueBookDropdown();
    populateReturnBookDropdown();
    updateDashboardStats();

    alert(`Success! "${loan.bookTitle}" returned by ${loan.memberName} has been checked in.`);

    let form = document.getElementById("returnBookForm");
    if (form) form.reset();
    setDefaultDates();
    showSection("dashboardSection");
}


// =========================================================
// 9. MEMBERS MANAGEMENT
// =========================================================

function renderMembers() {
    let tbody = document.getElementById("membersTableBody");
    if (!tbody) return;

    let members = getMembers();
    let loans = getLoans();

    let html = "";
    members.forEach(function (m) {
        let activeBorrowed = loans.filter(function (l) {
            return l.memberId === m.id && !l.returnDate;
        }).length;

        html += `
            <tr>
                <td><span class="badge bg-light text-dark border fw-bold">${escapeHtml(m.id)}</span></td>
                <td class="fw-semibold">${escapeHtml(m.name)}</td>
                <td>${escapeHtml(m.email)}</td>
                <td>${escapeHtml(m.phone)}</td>
                <td><span class="badge ${activeBorrowed > 0 ? 'bg-primary' : 'bg-secondary'}">${activeBorrowed} book(s)</span></td>
                <td><span class="badge bg-success">Active</span></td>
            </tr>
        `;
    });

    tbody.innerHTML = html;

    let dashMembers = document.getElementById("dashMembers");
    if (dashMembers) dashMembers.textContent = members.length;
}

function saveNewMember(event) {
    if (event) event.preventDefault();

    let nameElem = document.getElementById("addMemberName");
    let emailElem = document.getElementById("addMemberEmail");
    let phoneElem = document.getElementById("addMemberPhone");

    if (!nameElem || !emailElem || !phoneElem) return;

    let name = nameElem.value.trim();
    let email = emailElem.value.trim();
    let phone = phoneElem.value.trim();

    if (!name || !email || !phone) {
        alert("Please fill in all member fields.");
        return;
    }

    let members = getMembers();
    let newMember = {
        id: "LIB-" + (100 + members.length + 1),
        name: name,
        email: email,
        phone: phone,
        status: "Active",
        borrowedCount: 0
    };

    members.push(newMember);
    saveMembers(members);

    renderMembers();
    populateIssueBookDropdown();
    closeBootstrapModal("addMemberModal");

    let form = document.getElementById("addMemberForm");
    if (form) form.reset();

    alert(`Member "${name}" registered successfully with ID: ${newMember.id}!`);
}


// =========================================================
// 10. DASHBOARD RECENT ACTIVITY & SUMMARY
// =========================================================

function updateDashboardStats() {
    let loans = getLoans();
    let tbody = document.getElementById("recentIssuedTableBody");

    // Count overdue
    let today = new Date().toISOString().split("T")[0];
    let overdueCount = 0;

    loans.forEach(function (l) {
        if (!l.returnDate && l.dueDate < today) {
            overdueCount++;
            l.status = "Overdue";
        }
    });

    let elOverdue = document.getElementById("dashOverdueBooks");
    if (elOverdue) elOverdue.textContent = overdueCount;

    if (tbody) {
        let html = "";
        let recentLoans = loans.slice(0, 6);

        if (recentLoans.length === 0) {
            html = `<tr><td colspan="7" class="text-center text-muted py-3">No recent issue transactions.</td></tr>`;
        } else {
            recentLoans.forEach(function (l, idx) {
                let statusBadge = "";
                if (l.returnDate) {
                    statusBadge = `<span class="badge bg-success">Returned</span>`;
                } else if (l.dueDate < today) {
                    statusBadge = `<span class="badge bg-danger">Overdue</span>`;
                } else {
                    statusBadge = `<span class="badge bg-warning text-dark">Issued</span>`;
                }

                html += `
                    <tr>
                        <td class="text-muted fw-bold">${idx + 1}</td>
                        <td class="fw-semibold">${escapeHtml(l.memberName)}</td>
                        <td>${escapeHtml(l.bookTitle)}</td>
                        <td>${l.issueDate}</td>
                        <td>${l.dueDate}</td>
                        <td>${statusBadge}</td>
                        <td>
                            ${!l.returnDate ? `
                                <button class="btn btn-xs btn-outline-warning btn-sm" onclick="quickReturnBook('${l.id}')">
                                    <i class="fa-solid fa-arrow-rotate-left"></i> Return
                                </button>
                            ` : `<span class="text-muted small">Completed</span>`}
                        </td>
                    </tr>
                `;
            });
        }
        tbody.innerHTML = html;
    }
}

function quickReturnBook(loanId) {
    showSection("returnSection");
    let select = document.getElementById("returnLoanSelect");
    if (select) {
        select.value = loanId;
        calculateReturnFine();
    }
}


// =========================================================
// 11. CSV EXPORT FOR BOOKS INVENTORY
// =========================================================

function exportBooksCSV() {
    let books = getBooks();
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Book ID,Title,Author,Category,ISBN,Year,Total Copies,Available Copies,Shelf,Status\n";

    books.forEach(function (b) {
        let row = [
            `"${b.id}"`,
            `"${(b.title || '').replace(/"/g, '""')}"`,
            `"${(b.author || '').replace(/"/g, '""')}"`,
            `"${(b.category || '').replace(/"/g, '""')}"`,
            `"${b.isbn || ''}"`,
            `"${b.year || ''}"`,
            `"${b.totalCopies || 0}"`,
            `"${b.availableCopies || 0}"`,
            `"${b.shelf || ''}"`,
            `"${b.status || ''}"`
        ].join(",");
        csvContent += row + "\n";
    });

    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `library_books_inventory_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


// =========================================================
// 12. NAVIGATION CONTROLLER
// =========================================================

function showSection(sectionId) {
    let sections = document.querySelectorAll(".content-section");
    sections.forEach(function (section) {
        section.style.display = "none";
    });

    let activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = "block";
    }

    let navLinks = document.querySelectorAll(".simple-nav .nav-item");
    navLinks.forEach(function (link) {
        link.classList.remove("active");
    });

    let currentNavLink = document.getElementById("nav-" + sectionId);
    if (currentNavLink) {
        currentNavLink.classList.add("active");
    }

    // Refresh context if opening specific tab
    if (sectionId === "booksSection") {
        renderBooks();
    } else if (sectionId === "issueSection") {
        populateIssueBookDropdown();
    } else if (sectionId === "returnSection") {
        populateReturnBookDropdown();
    } else if (sectionId === "membersSection") {
        renderMembers();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function logoutUser() {
    sessionStorage.removeItem("loggedInUser");
    alert("You have been logged out.");
    window.location.href = "login.html";
}


// =========================================================
// 13. AUTHENTICATION (LOGIN & REGISTER)
// =========================================================

function registerUser(event) {
    if (event) event.preventDefault();

    let nameElem = document.getElementById("userName");
    let emailElem = document.getElementById("userEmail");
    let phoneElem = document.getElementById("userPhone");
    let addressElem = document.getElementById("userAddress");
    let passwordElem = document.getElementById("userPassword");
    let confirmPasswordElem = document.getElementById("confirmPassword");

    if (!nameElem || !emailElem || !phoneElem || !addressElem || !passwordElem || !confirmPasswordElem) {
        alert("Register form fields could not be found.");
        return;
    }

    let name = nameElem.value.trim();
    let email = emailElem.value.trim();
    let phone = phoneElem.value.trim();
    let address = addressElem.value.trim();
    let password = passwordElem.value;
    let confirmPassword = confirmPasswordElem.value;

    if (!name || !email || !phone || !address || !password || !confirmPassword) {
        alert("Please fill all the fields.");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match.");
        return;
    }

    let savedUsers = localStorage.getItem("libraryUsers");
    let users = [];
    try {
        if (savedUsers) users = JSON.parse(savedUsers);
    } catch (e) {
        users = [];
    }
    if (!Array.isArray(users)) users = [users];

    let existingUser = users.find(function (u) {
        return u && u.email && u.email.toLowerCase() === email.toLowerCase();
    });

    if (existingUser) {
        alert("This email is already registered. Please login or use a different email.");
        return;
    }

    let user = { name: name, email: email, phone: phone, address: address, password: password };
    users.push(user);
    localStorage.setItem("libraryUsers", JSON.stringify(users));

    alert("Registration Successful!");
    window.location.href = "login.html";
}

function loginUser(event) {
    if (event) event.preventDefault();

    let emailElem = document.getElementById("inputEmail3");
    let passwordElem = document.getElementById("inputPassword3");

    if (!emailElem || !passwordElem) {
        alert("Login form fields could not be found.");
        return;
    }

    let email = emailElem.value.trim();
    let password = passwordElem.value;

    if (email === "" || password === "") {
        alert("Please enter Email and Password.");
        return;
    }

    let savedUsers = localStorage.getItem("libraryUsers");
    let users = [];
    try {
        if (savedUsers) users = JSON.parse(savedUsers);
    } catch (e) {
        users = [];
    }
    if (!Array.isArray(users)) users = [users];

    let user = users.find(function (u) {
        return u && u.email && u.email.toLowerCase() === email.toLowerCase() && u.password === password;
    });

    if (user) {
        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Email or Password.");
    }
}


// =========================================================
// 14. HELPER UTILITIES
// =========================================================

function escapeHtml(text) {
    if (!text) return "";
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function openBootstrapModal(modalId) {
    let elem = document.getElementById(modalId);
    if (!elem) return;
    if (typeof bootstrap !== "undefined" && bootstrap.Modal) {
        let modalInstance = bootstrap.Modal.getInstance(elem) || new bootstrap.Modal(elem);
        modalInstance.show();
    } else {
        elem.classList.add("show");
        elem.style.display = "block";
        document.body.classList.add("modal-open");
    }
}

function closeBootstrapModal(modalId) {
    let elem = document.getElementById(modalId);
    if (!elem) return;
    if (typeof bootstrap !== "undefined" && bootstrap.Modal) {
        let modalInstance = bootstrap.Modal.getInstance(elem);
        if (modalInstance) modalInstance.hide();
    } else {
        elem.classList.remove("show");
        elem.style.display = "none";
        document.body.classList.remove("modal-open");
    }
}

function setDefaultDates() {
    let todayISO = new Date().toISOString().split("T")[0];
    let issueDate = document.getElementById("simpleIssueDate");
    let dueDate = document.getElementById("simpleDueDate");
    let returnDate = document.getElementById("simpleReturnDate");

    if (issueDate) issueDate.value = todayISO;
    if (returnDate) returnDate.value = todayISO;

    if (dueDate) {
        let due = new Date();
        due.setDate(due.getDate() + 14); // 14 days default loan period
        dueDate.value = due.toISOString().split("T")[0];
    }
}


// =========================================================
// 15. INITIALIZATION ON DOM READY
// =========================================================

window.addEventListener("DOMContentLoaded", function () {
    // 1. User greeting
    let savedUser = sessionStorage.getItem("loggedInUser");
    let user = null;
    try {
        if (savedUser) user = JSON.parse(savedUser);
    } catch (e) {
        console.error("Error parsing loggedInUser:", e);
    }

    let userNameElement = document.getElementById("userName");
    if (userNameElement) {
        userNameElement.textContent = (user && user.name) ? user.name : "Reader";
    }

    // 2. Today's Date
    let todayDateElement = document.getElementById("todayDate");
    if (todayDateElement) {
        let today = new Date();
        let options = { month: "short", day: "numeric", year: "numeric" };
        todayDateElement.textContent = today.toLocaleDateString("en-US", options);
    }

    // 3. Set standard dates in forms
    setDefaultDates();

    // 4. Initialize Data & Render
    getBooks();
    getMembers();
    getLoans();

    renderBooks();
    renderMembers();
    populateIssueBookDropdown();
    populateReturnBookDropdown();
    updateDashboardStats();
});
