//
//  ViewController.swift
//  InterplanetaryCalendar
//
//  Created by Venture Stegasaur on 4/7/19.
//  Copyright © 2019 Steve Richey. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var button: UIButton!
    var isSegueAllowed = false

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }

    override func shouldPerformSegue(withIdentifier identifier: String, sender: Any?) -> Bool {
        switch identifier {
        case "greenView":
            print("going to the green view")

            if isSegueAllowed {
                return true
            } else {
                return false
            }
        default:
            print("going to some other view?")
            return true
        }
    }

    @IBAction func didPressSwitch(_ sender: Any) {
        isSegueAllowed = !isSegueAllowed
    }

    @IBAction func didPressShowAlert(_ sender: Any) {
        // create the alert controller
        let alert = UIAlertController(title: "Hello world!", message: "This is an alert", preferredStyle: .alert)

        // create a default action
        let action1 = UIAlertAction(title: "Hello", style: .default) { _ in
            // this code will be run when the user picks "Hello"
            print("Hello was clicked")
        }

        // create a cancel action
        let action2 = UIAlertAction(title: "Cancel", style: .cancel) { _ in
            // this code will be run when the user picks "Cancel"
            print("action was cancelled")
        }

        // create a destructive action
        let action3 = UIAlertAction(title: "DELETE", style: .destructive) { _ in
            // this code will be run when the user picks "DELETE"
            print("DELETE WAS CLICKED")
        }

        // add all actions to the alert
        alert.addAction(action1)
        alert.addAction(action2)
        alert.addAction(action3)

        // show the alert to the user
        present(alert, animated: true) {
            // this code will run after the alert is shown
            print("alert was shown")
        }
    }
}
