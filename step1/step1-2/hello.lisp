(print "What's your name")

(defvar *name* (read))

(defun hello-you (name)
    (format t "Hello ~a! ~%" name)
)

(setq *print-case* :capsitalize)
(hello-you *name*)