
        // Define your components
        var PostComponent = function(id, title, content, author) {
            this.id = id;
            this.title = title;
            this.content = content;
            this.author = author;
            this.render = function() {
                return `
                    <div class="post">
                        <h2 class="post-title">${this.title}</h2>
                        <p class="post-content">${this.content}</p>
                        <p class="post-author">Posted by: ${this.author}</p>
                        <button class="reply-button active" id="reply-${this.id}">Reply</button>
                        <button class="cancel-button" id="cancel-${this.id}">Cancel</button>
                        <div class="arrow-div">
                            <textarea class="reply-textarea" id="textarea-${this.id}" placeholder="Write your reply..."></textarea>
                            <button class="arrow" id="arrow-${this.id}">
                                <img src="SendArrow.png" alt="Arrow" />
                            </button>
                        </div>
                    </div>
                `;
            }
        }

